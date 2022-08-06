'reach 0.1';

const amount = 1;
const MUInt = Maybe(UInt);

const NUMBER_OF_USERS = 3;

const [isWinner, WINNER, LOSER] = makeEnum(2);

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const A = Participant('Alice', {

    // Alice's interact interface
    ...hasRandom,
    startRaffle: Fun([], Object({
      nftId: Token,
      numTickets: UInt,
      deadline: UInt
    })),
    seeHash: Fun([Digest], Null),
    getNum: Fun([UInt], UInt),
    seeOutcome: Fun([], Null),
    playingOver: Fun([UInt], Null)
  });

  const B = API('Bobs', {
    //Bob's interact interface
    playNum: Fun([UInt], UInt),
    seeOutcome: Fun([], UInt)
  });

  const C = API('Winner', {
    showWinner: Fun([], UInt)
  });

  init();

  A.only(() => {
    const { nftId, numTickets, deadline } = declassify(interact.startRaffle());
    const _winningNumber = interact.getNum(numTickets);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNumber);
    const commitA = declassify(_commitA);
  })

  //First to publish deploys the contract
  A.publish(nftId, numTickets, deadline, commitA);

  A.interact.seeHash(commitA);
  commit();

  A.pay([[amount, nftId]]);
  commit();
  A.publish()

  const numPlayed = new Map(UInt);

  const [keepGoing, howMany] = parallelReduce([true, 0])
    .invariant(balance() == 0)
    .while(keepGoing)
    .api(
      B.playNum,
      // Assumes Expression
      ((num) => {
        assume(this != A, 'A deployer cannot participate');
        assume(isNone(numPlayed[this]))
      }),

      // Payments Expressinn
      ((_) => 0),

      // Consensus Expressinn
      ((num, reply) => {
        require(this != A, 'Deployer cannot participate');
        require(isNone(numPlayed[this]))
        reply(num);
        numPlayed[this] = num;
        const maxR = howMany < NUMBER_OF_USERS ? true : false

        return [maxR, howMany + 1];
      })
    )
    .timeout(relativeTime(deadline), () => {
      Anybody.publish();
      return [false, howMany];
    });

  commit();

  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNumber);
  });

  A.publish(saltA, winningNum);
  checkCommitment(commitA, saltA, winningNum);

  A.interact.playingOver(winningNum);

  const tP = howMany;

  const [kG, hM] = parallelReduce([true, 0])
    .invariant(balance() == 0)
    .while(kG)
    .api(
      B.seeOutcome,
      // Assumes Expression
      (() => {
        assume(this != A, 'Deployer cannot participate');
        assume(amount > 0, 'The Amount is insufficient for transfer');
        assume(balance(nftId) > 0, 'NFT Balance is insufficient for transfer');
      }),
      // Payments Expressinn
      (() => 0),
      // Consensus Expressinn
      ((reply) => {
        require(this != A, 'Deployer cannot participate');
        require(amount > 0, 'The Amount is insufficient for transfer');
        require(balance(nftId) > 0, 'NFT Balance is insufficient for transfer');
        const wN = (numPlayed[this] == MUInt.Some(winningNum)) ? WINNER: LOSER;
        reply(wN);

        if (wN == WINNER) {
          transfer([0, [amount, nftId]]).to(this);
        }

        const maxR = hM < tP ? true : false
        return [maxR, hM + 1];
      })
    ).api_(C.showWinner, () => {
      return [0, (k) => {
        k(winningNum);
        return [true, hM];
      }];
    }
    ).timeout(relativeTime(deadline), () => {
      Anybody.publish();
      return [false, hM];
    });


  transfer(balance(nftId), nftId).to(A);

  A.interact.seeOutcome();

  commit();
  exit();
});
