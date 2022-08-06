// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6],
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2],
      8: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    deadline: ctc1,
    nftId: ctc3,
    numTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Bobs_seeOutcome0_187: ctc12,
    Winner_showWinner0_187: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v393 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v394 = [v393];
  const v400 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:40:76:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v401 = v400.deadline;
  const v402 = v400.nftId;
  const v403 = v400.numTickets;
  const v407 = stdlib.protect(ctc1, await interact.getNum(v403), {
    at: './index.rsh:41:43:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v408 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:42:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v409 = stdlib.digest(ctc5, [v408, v407]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v403, v401, v409],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v412, v413, v414, v415], secs: v417, time: v416, didSend: v42, from: v411 } = txn1;
      
      const v418 = v394[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
      const v420 = v418[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
      const v421 = v418[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
      const v422 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v420, v421];
      const v423 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v422);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v412
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v412, v413, v414, v415], secs: v417, time: v416, didSend: v42, from: v411 } = txn1;
  const v418 = v394[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0')];
  const v420 = v418[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '1')];
  const v421 = v418[stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '2')];
  const v422 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v420, v421];
  const v423 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'), v422);
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v415), {
    at: './index.rsh:49:21:application',
    fs: ['at ./index.rsh:49:21:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at ./index.rsh:49:21:application call to "liftedInteract" (defined at: ./index.rsh:49:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v411, v412, v414, v415, v423],
    evt_cnt: 0,
    funcNum: 1,
    lct: v416,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'), v412]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v428, time: v427, didSend: v53, from: v426 } = txn2;
      
      ;
      const v429 = v423[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
      const v430 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
      const v431 = stdlib.add(v430, stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'));
      const v434 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
      const v435 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
      const v436 = [v431, v434, v435];
      const v437 = stdlib.Array_set(v423, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v436);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v412
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v428, time: v427, didSend: v53, from: v426 } = txn2;
  ;
  const v429 = v423[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
  const v430 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0')];
  const v431 = stdlib.add(v430, stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'));
  const v434 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '1')];
  const v435 = v429[stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '2')];
  const v436 = [v431, v434, v435];
  const v437 = stdlib.Array_set(v423, stdlib.checkedBigNumberify('./index.rsh:52:5:dot', stdlib.UInt_max, '0'), v436);
  ;
  const v438 = stdlib.addressEq(v411, v426);
  stdlib.assert(v438, {
    at: './index.rsh:52:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v411, v412, v414, v415, v437],
    evt_cnt: 0,
    funcNum: 2,
    lct: v427,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v441, time: v440, didSend: v58, from: v439 } = txn3;
      
      ;
      const v443 = stdlib.checkedBigNumberify('./index.rsh:58:54:decimal', stdlib.UInt_max, '0');
      const v444 = true;
      const v445 = v440;
      const v451 = v437;
      
      if (await (async () => {
        
        return v444;})()) {
        const v461 = stdlib.add(v445, v414);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v441, time: v440, didSend: v58, from: v439 } = txn3;
  ;
  const v442 = stdlib.addressEq(v411, v439);
  stdlib.assert(v442, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v443 = stdlib.checkedBigNumberify('./index.rsh:58:54:decimal', stdlib.UInt_max, '0');
  let v444 = true;
  let v445 = v440;
  let v451 = v437;
  
  while (await (async () => {
    
    return v444;})()) {
    const v461 = stdlib.add(v445, v414);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: ['time', v461],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v411, v412, v414, v415, v443, v451, v461],
        evt_cnt: 0,
        funcNum: 9,
        lct: v445,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:84:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v502, time: v501, didSend: v159, from: v500 } = txn5;
          
          ;
          const cv443 = v443;
          const cv444 = false;
          const cv445 = v501;
          const cv451 = v451;
          
          await (async () => {
            const v443 = cv443;
            const v444 = cv444;
            const v445 = cv445;
            const v451 = cv451;
            
            if (await (async () => {
              
              return v444;})()) {
              const v461 = stdlib.add(v445, v414);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc6, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v502, time: v501, didSend: v159, from: v500 } = txn5;
      ;
      const v503 = stdlib.addressEq(v411, v500);
      stdlib.assert(v503, {
        at: './index.rsh:84:15:dot',
        fs: ['at ./index.rsh:83:41:application call to [unknown function] (defined at: ./index.rsh:83:41:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv443 = v443;
      const cv444 = false;
      const cv445 = v501;
      const cv451 = v451;
      
      v443 = cv443;
      v444 = cv444;
      v445 = cv445;
      v451 = cv451;
      
      continue;
      }
    else {
      const {data: [v478], secs: v480, time: v479, didSend: v118, from: v477 } = txn4;
      undefined /* setApiDetails */;
      const v482 = v478[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
      ;
      const v484 = stdlib.addressEq(v477, v411);
      const v485 = v484 ? false : true;
      stdlib.assert(v485, {
        at: './index.rsh:74:16:application',
        fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:7:function exp)'],
        msg: 'Deployer cannot participate',
        who: 'Alice'
        });
      const v486 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v477), null);
      let v487;
      switch (v486[0]) {
        case 'None': {
          const v488 = v486[1];
          v487 = true;
          
          break;
          }
        case 'Some': {
          const v489 = v486[1];
          v487 = false;
          
          break;
          }
        }
      stdlib.assert(v487, {
        at: './index.rsh:75:16:application',
        fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:7:function exp)'],
        msg: null,
        who: 'Alice'
        });
      await txn4.getOutput('Bobs_playNum', 'v482', ctc1, v482);
      await stdlib.mapSet(map0, v477, v482);
      const v496 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:6:25:decimal', stdlib.UInt_max, '3'));
      const v498 = stdlib.add(v443, stdlib.checkedBigNumberify('./index.rsh:80:33:decimal', stdlib.UInt_max, '1'));
      const cv443 = v498;
      const cv444 = v496;
      const cv445 = v479;
      const cv451 = v451;
      
      v443 = cv443;
      v444 = cv444;
      v445 = cv445;
      v451 = cv451;
      
      continue;}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v411, v412, v414, v415, v443, v451, v408, v407],
    evt_cnt: 2,
    funcNum: 4,
    lct: v445,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v509, v510], secs: v512, time: v511, didSend: v170, from: v508 } = txn4;
      
      ;
      
      const v517 = stdlib.checkedBigNumberify('./index.rsh:102:42:decimal', stdlib.UInt_max, '0');
      const v518 = true;
      const v519 = v511;
      const v525 = v451;
      
      if (await (async () => {
        
        return v518;})()) {
        const v535 = stdlib.add(v519, v414);
        sim_r.isHalt = false;
        }
      else {
        const v674 = v525[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
        const v675 = v674[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v411,
          tok: v412
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v412
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6, ctc1, ctc11, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v509, v510], secs: v512, time: v511, didSend: v170, from: v508 } = txn4;
  ;
  const v513 = stdlib.addressEq(v411, v508);
  stdlib.assert(v513, {
    at: './index.rsh:95:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v514 = stdlib.digest(ctc5, [v509, v510]);
  const v515 = stdlib.digestEq(v415, v514);
  stdlib.assert(v515, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:96:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.playingOver(v510), {
    at: './index.rsh:98:25:application',
    fs: ['at ./index.rsh:98:25:application call to [unknown function] (defined at: ./index.rsh:98:25:function exp)', 'at ./index.rsh:98:25:application call to "liftedInteract" (defined at: ./index.rsh:98:25:application)'],
    msg: 'playingOver',
    who: 'Alice'
    });
  
  let v517 = stdlib.checkedBigNumberify('./index.rsh:102:42:decimal', stdlib.UInt_max, '0');
  let v518 = true;
  let v519 = v511;
  let v525 = v451;
  
  while (await (async () => {
    
    return v518;})()) {
    const v535 = stdlib.add(v519, v414);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc13],
      timeoutAt: ['time', v535],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v411, v412, v414, v443, v510, v517, v525, v535],
        evt_cnt: 0,
        funcNum: 7,
        lct: v519,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:137:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v670, time: v669, didSend: v314, from: v668 } = txn6;
          
          ;
          const cv517 = v517;
          const cv518 = false;
          const cv519 = v669;
          const cv525 = v525;
          
          await (async () => {
            const v517 = cv517;
            const v518 = cv518;
            const v519 = cv519;
            const v525 = cv525;
            
            if (await (async () => {
              
              return v518;})()) {
              const v535 = stdlib.add(v519, v414);
              sim_r.isHalt = false;
              }
            else {
              const v674 = v525[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
              const v675 = v674[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v411,
                tok: v412
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v412
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v670, time: v669, didSend: v314, from: v668 } = txn6;
      ;
      const v671 = stdlib.addressEq(v411, v668);
      stdlib.assert(v671, {
        at: './index.rsh:137:15:dot',
        fs: ['at ./index.rsh:136:42:application call to [unknown function] (defined at: ./index.rsh:136:42:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv517 = v517;
      const cv518 = false;
      const cv519 = v669;
      const cv525 = v525;
      
      v517 = cv517;
      v518 = cv518;
      v519 = cv519;
      v525 = cv525;
      
      continue;
      }
    else {
      const {data: [v561], secs: v563, time: v562, didSend: v258, from: v560 } = txn5;
      switch (v561[0]) {
        case 'Bobs_seeOutcome0_187': {
          const v564 = v561[1];
          undefined /* setApiDetails */;
          ;
          const v571 = stdlib.addressEq(v560, v411);
          const v572 = v571 ? false : true;
          stdlib.assert(v572, {
            at: './index.rsh:117:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: 'Deployer cannot participate',
            who: 'Alice'
            });
          const v573 = v525[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
          const v574 = v573[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
          const v575 = stdlib.gt(v574, stdlib.checkedBigNumberify('./index.rsh:119:34:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v575, {
            at: './index.rsh:119:16:application',
            fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
            msg: 'NFT Balance is insufficient for transfer',
            who: 'Alice'
            });
          const v576 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v560), null);
          const v577 = ['Some', v510];
          const v578 = stdlib.digest(ctc14, [v576]);
          const v580 = stdlib.digest(ctc14, [v577]);
          const v581 = stdlib.digestEq(v578, v580);
          const v582 = v581 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          await txn5.getOutput('Bobs_seeOutcome', 'v582', ctc1, v582);
          const v588 = stdlib.eq(v582, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v588) {
            const v594 = stdlib.sub(v574, stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'));
            const v597 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '1')];
            const v598 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '2')];
            const v599 = [v594, v597, v598];
            const v600 = stdlib.Array_set(v525, stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '0'), v599);
            ;
            const v601 = stdlib.lt(v517, v443);
            const v603 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
            const cv517 = v603;
            const cv518 = v601;
            const cv519 = v562;
            const cv525 = v600;
            
            v517 = cv517;
            v518 = cv518;
            v519 = cv519;
            v525 = cv525;
            
            continue;}
          else {
            const v605 = stdlib.lt(v517, v443);
            const v607 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
            const cv517 = v607;
            const cv518 = v605;
            const cv519 = v562;
            const cv525 = v525;
            
            v517 = cv517;
            v518 = cv518;
            v519 = cv519;
            v525 = cv525;
            
            continue;}
          break;
          }
        case 'Winner_showWinner0_187': {
          const v616 = v561[1];
          undefined /* setApiDetails */;
          ;
          await txn5.getOutput('Winner_showWinner', 'v510', ctc1, v510);
          const cv517 = v517;
          const cv518 = true;
          const cv519 = v562;
          const cv525 = v525;
          
          v517 = cv517;
          v518 = cv518;
          v519 = cv519;
          v525 = cv525;
          
          continue;
          break;
          }
        }}
    
    }
  const v674 = v525[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
  const v675 = v674[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(), {
    at: './index.rsh:144:24:application',
    fs: ['at ./index.rsh:144:24:application call to [unknown function] (defined at: ./index.rsh:144:24:function exp)', 'at ./index.rsh:144:24:application call to "liftedInteract" (defined at: ./index.rsh:144:24:application)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function _Bobs_playNum8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_playNum8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_playNum8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v411, v412, v414, v415, v443, v451, v461] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc1]);
  const v463 = ctc.selfAddress();
  const v465 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)', 'at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)'],
    msg: 'in',
    who: 'Bobs_playNum'
    });
  const v469 = stdlib.addressEq(v463, v411);
  const v470 = v469 ? false : true;
  stdlib.assert(v470, {
    at: './index.rsh:65:15:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:14:function exp)', 'at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)', 'at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)'],
    msg: 'A deployer cannot participate',
    who: 'Bobs_playNum'
    });
  const v471 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v463), null);
  let v472;
  switch (v471[0]) {
    case 'None': {
      const v473 = v471[1];
      v472 = true;
      
      break;
      }
    case 'Some': {
      const v474 = v471[1];
      v472 = false;
      
      break;
      }
    }
  stdlib.assert(v472, {
    at: './index.rsh:66:15:application',
    fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:14:function exp)', 'at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)', 'at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:7:function exp)'],
    msg: null,
    who: 'Bobs_playNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v411, v412, v414, v415, v443, v451, v461, v465],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v478], secs: v480, time: v479, didSend: v118, from: v477 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bobs_playNum"
        });
      const v482 = v478[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v477), null);
      const v490 = await txn1.getOutput('Bobs_playNum', 'v482', ctc1, v482);
      
      await stdlib.simMapSet(sim_r, 0, v477, v482);
      const v496 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:6:25:decimal', stdlib.UInt_max, '3'));
      const v498 = stdlib.add(v443, stdlib.checkedBigNumberify('./index.rsh:80:33:decimal', stdlib.UInt_max, '1'));
      const v1049 = v498;
      const v1052 = v451;
      if (v496) {
        const v1053 = stdlib.add(v479, v414);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc8, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v478], secs: v480, time: v479, didSend: v118, from: v477 } = txn1;
  undefined /* setApiDetails */;
  const v482 = v478[stdlib.checkedBigNumberify('./index.rsh:61:9:spread', stdlib.UInt_max, '0')];
  ;
  const v484 = stdlib.addressEq(v477, v411);
  const v485 = v484 ? false : true;
  stdlib.assert(v485, {
    at: './index.rsh:74:16:application',
    fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:7:function exp)'],
    msg: 'Deployer cannot participate',
    who: 'Bobs_playNum'
    });
  const v486 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v477), null);
  let v487;
  switch (v486[0]) {
    case 'None': {
      const v488 = v486[1];
      v487 = true;
      
      break;
      }
    case 'Some': {
      const v489 = v486[1];
      v487 = false;
      
      break;
      }
    }
  stdlib.assert(v487, {
    at: './index.rsh:75:16:application',
    fs: ['at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:7:function exp)'],
    msg: null,
    who: 'Bobs_playNum'
    });
  const v490 = await txn1.getOutput('Bobs_playNum', 'v482', ctc1, v482);
  if (v118) {
    stdlib.protect(ctc0, await interact.out(v478, v490), {
      at: './index.rsh:62:7:application',
      fs: ['at ./index.rsh:62:7:application call to [unknown function] (defined at: ./index.rsh:62:7:function exp)', 'at ./index.rsh:76:14:application call to "reply" (defined at: ./index.rsh:73:7:function exp)', 'at ./index.rsh:73:7:application call to [unknown function] (defined at: ./index.rsh:73:7:function exp)'],
      msg: 'out',
      who: 'Bobs_playNum'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v477, v482);
  const v496 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:6:25:decimal', stdlib.UInt_max, '3'));
  const v498 = stdlib.add(v443, stdlib.checkedBigNumberify('./index.rsh:80:33:decimal', stdlib.UInt_max, '1'));
  const v1049 = v498;
  const v1052 = v451;
  if (v496) {
    const v1053 = stdlib.add(v479, v414);
    return;
    }
  else {
    return;
    }
  
  
  };
export async function _Bobs_seeOutcome7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Bobs_seeOutcome0_187: ctc8,
    Winner_showWinner0_187: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v411, v412, v414, v443, v510, v517, v525, v535] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v537 = ctc.selfAddress();
  const v539 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:108:7:application call to [unknown function] (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:102:34:application call to "runBobs_seeOutcome0_187" (defined at: ./index.rsh:105:9:function exp)', 'at ./index.rsh:102:34:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
    msg: 'in',
    who: 'Bobs_seeOutcome'
    });
  const v541 = stdlib.addressEq(v537, v411);
  const v542 = v541 ? false : true;
  stdlib.assert(v542, {
    at: './index.rsh:109:15:application',
    fs: ['at ./index.rsh:108:7:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:108:7:application call to [unknown function] (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:102:34:application call to "runBobs_seeOutcome0_187" (defined at: ./index.rsh:105:9:function exp)', 'at ./index.rsh:102:34:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
    msg: 'Deployer cannot participate',
    who: 'Bobs_seeOutcome'
    });
  const v543 = v525[stdlib.checkedBigNumberify('./index.rsh:111:23:application', stdlib.UInt_max, '0')];
  const v544 = v543[stdlib.checkedBigNumberify('./index.rsh:111:23:application', stdlib.UInt_max, '0')];
  const v545 = stdlib.gt(v544, stdlib.checkedBigNumberify('./index.rsh:111:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v545, {
    at: './index.rsh:111:15:application',
    fs: ['at ./index.rsh:108:7:application call to [unknown function] (defined at: ./index.rsh:108:11:function exp)', 'at ./index.rsh:108:7:application call to [unknown function] (defined at: ./index.rsh:108:7:function exp)', 'at ./index.rsh:102:34:application call to "runBobs_seeOutcome0_187" (defined at: ./index.rsh:105:9:function exp)', 'at ./index.rsh:102:34:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
    msg: 'NFT Balance is insufficient for transfer',
    who: 'Bobs_seeOutcome'
    });
  const v548 = ['Bobs_seeOutcome0_187', v539];
  
  const txn1 = await (ctc.sendrecv({
    args: [v411, v412, v414, v443, v510, v517, v525, v535, v548],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v561], secs: v563, time: v562, didSend: v258, from: v560 } = txn1;
      
      switch (v561[0]) {
        case 'Bobs_seeOutcome0_187': {
          const v564 = v561[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_seeOutcome"
            });
          ;
          const v573 = v525[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
          const v574 = v573[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
          const v576 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v560), null);
          const v577 = ['Some', v510];
          const v578 = stdlib.digest(ctc10, [v576]);
          const v580 = stdlib.digest(ctc10, [v577]);
          const v581 = stdlib.digestEq(v578, v580);
          const v582 = v581 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v583 = await txn1.getOutput('Bobs_seeOutcome', 'v582', ctc1, v582);
          
          const v588 = stdlib.eq(v582, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v588) {
            const v594 = stdlib.sub(v574, stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'));
            const v597 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '1')];
            const v598 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '2')];
            const v599 = [v594, v597, v598];
            const v600 = stdlib.Array_set(v525, stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '0'), v599);
            sim_r.txns.push({
              kind: 'from',
              to: v560,
              tok: v412
              });
            const v601 = stdlib.lt(v517, v443);
            const v603 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
            const v1105 = v603;
            const v1108 = v600;
            if (v601) {
              const v1109 = stdlib.add(v562, v414);
              sim_r.isHalt = false;
              }
            else {
              const v1110 = v600[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
              const v1111 = v1110[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v411,
                tok: v412
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v412
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v605 = stdlib.lt(v517, v443);
            const v607 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
            const v1112 = v607;
            const v1115 = v525;
            if (v605) {
              const v1116 = stdlib.add(v562, v414);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v411,
                tok: v412
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v412
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Winner_showWinner0_187': {
          const v616 = v561[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v561], secs: v563, time: v562, didSend: v258, from: v560 } = txn1;
  switch (v561[0]) {
    case 'Bobs_seeOutcome0_187': {
      const v564 = v561[1];
      undefined /* setApiDetails */;
      ;
      const v571 = stdlib.addressEq(v560, v411);
      const v572 = v571 ? false : true;
      stdlib.assert(v572, {
        at: './index.rsh:117:16:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
        msg: 'Deployer cannot participate',
        who: 'Bobs_seeOutcome'
        });
      const v573 = v525[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
      const v574 = v573[stdlib.checkedBigNumberify('./index.rsh:119:24:application', stdlib.UInt_max, '0')];
      const v575 = stdlib.gt(v574, stdlib.checkedBigNumberify('./index.rsh:119:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v575, {
        at: './index.rsh:119:16:application',
        fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
        msg: 'NFT Balance is insufficient for transfer',
        who: 'Bobs_seeOutcome'
        });
      const v576 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v560), null);
      const v577 = ['Some', v510];
      const v578 = stdlib.digest(ctc10, [v576]);
      const v580 = stdlib.digest(ctc10, [v577]);
      const v581 = stdlib.digestEq(v578, v580);
      const v582 = v581 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v583 = await txn1.getOutput('Bobs_seeOutcome', 'v582', ctc1, v582);
      if (v258) {
        stdlib.protect(ctc0, await interact.out(v564, v583), {
          at: './index.rsh:106:7:application',
          fs: ['at ./index.rsh:106:7:application call to [unknown function] (defined at: ./index.rsh:106:7:function exp)', 'at ./index.rsh:121:14:application call to "reply" (defined at: ./index.rsh:116:7:function exp)', 'at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)'],
          msg: 'out',
          who: 'Bobs_seeOutcome'
          });
        }
      else {
        }
      
      const v588 = stdlib.eq(v582, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v588) {
        const v594 = stdlib.sub(v574, stdlib.checkedBigNumberify('./index.rsh:3:16:decimal', stdlib.UInt_max, '1'));
        const v597 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '1')];
        const v598 = v573[stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '2')];
        const v599 = [v594, v597, v598];
        const v600 = stdlib.Array_set(v525, stdlib.checkedBigNumberify('./index.rsh:124:44:application', stdlib.UInt_max, '0'), v599);
        ;
        const v601 = stdlib.lt(v517, v443);
        const v603 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
        const v1105 = v603;
        const v1108 = v600;
        if (v601) {
          const v1109 = stdlib.add(v562, v414);
          return;
          }
        else {
          const v1110 = v600[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
          const v1111 = v1110[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
          ;
          return;
          }}
      else {
        const v605 = stdlib.lt(v517, v443);
        const v607 = stdlib.add(v517, stdlib.checkedBigNumberify('./index.rsh:128:28:decimal', stdlib.UInt_max, '1'));
        const v1112 = v607;
        const v1115 = v525;
        if (v605) {
          const v1116 = stdlib.add(v562, v414);
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Winner_showWinner0_187': {
      const v616 = v561[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Winner_showWinner7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Winner_showWinner7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Winner_showWinner7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Bobs_seeOutcome0_187: ctc8,
    Winner_showWinner0_187: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v411, v412, v414, v443, v510, v517, v525, v535] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v552 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:130:29:application call to [unknown function] (defined at: ./index.rsh:130:29:function exp)', 'at ./index.rsh:102:34:application call to "runWinner_showWinner0_187" (defined at: ./index.rsh:130:11:function exp)', 'at ./index.rsh:102:34:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
    msg: 'in',
    who: 'Winner_showWinner'
    });
  const v556 = ['Winner_showWinner0_187', v552];
  
  const txn1 = await (ctc.sendrecv({
    args: [v411, v412, v414, v443, v510, v517, v525, v535, v556],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:131:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v561], secs: v563, time: v562, didSend: v258, from: v560 } = txn1;
      
      switch (v561[0]) {
        case 'Bobs_seeOutcome0_187': {
          const v564 = v561[1];
          
          break;
          }
        case 'Winner_showWinner0_187': {
          const v616 = v561[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Winner_showWinner"
            });
          ;
          const v662 = await txn1.getOutput('Winner_showWinner', 'v510', ctc1, v510);
          
          const v1140 = v517;
          const v1143 = v525;
          const v1144 = stdlib.add(v562, v414);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v561], secs: v563, time: v562, didSend: v258, from: v560 } = txn1;
  switch (v561[0]) {
    case 'Bobs_seeOutcome0_187': {
      const v564 = v561[1];
      return;
      break;
      }
    case 'Winner_showWinner0_187': {
      const v616 = v561[1];
      undefined /* setApiDetails */;
      ;
      const v662 = await txn1.getOutput('Winner_showWinner', 'v510', ctc1, v510);
      if (v258) {
        stdlib.protect(ctc0, await interact.out(v616, v662), {
          at: './index.rsh:130:12:application',
          fs: ['at ./index.rsh:130:12:application call to [unknown function] (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:132:10:application call to "k" (defined at: ./index.rsh:131:22:function exp)', 'at ./index.rsh:131:22:application call to [unknown function] (defined at: ./index.rsh:131:22:function exp)'],
          msg: 'out',
          who: 'Winner_showWinner'
          });
        }
      else {
        }
      
      const v1140 = v517;
      const v1143 = v525;
      const v1144 = stdlib.add(v562, v414);
      return;
      
      break;
      }
    }
  
  
  };
export async function Bobs_playNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_playNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_playNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bobs_playNum8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bobs_seeOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bobs_seeOutcome7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Winner_showWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Winner_showWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Winner_showWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Winner_showWinner7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bobs_playNum(uint64)uint64`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`],
    pure: [],
    sigs: [`Bobs_playNum(uint64)uint64`, `Bobs_seeOutcome()uint64`, `Winner_showWinner()uint64`]
    },
  appApproval: `BiASAAEECCAoAgkHUNfGrKEL4sL8xgxpWTA4QKCNBiYDAQAAAQEiNQAxGEEGFilkSSJbNQElWzUCMRkjEkEACjEAKCEHr2ZCBeM2GgAXSUEAPiI1BCM1BkkhCgxAACNJIQsMQAAOIQsSRCk1/yo0/1BCAZMhChJEKTX/KDT/UEIBhYHLxcnjCBJENhoBQgB3NhoCFzUENhoDNhoBF0mBBgxAAoBJJQxAAP1JIQcMQABVIQcSRCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASiBWaOsDIGNAMhDFsPRDT/MQASRDT/NAMhBFs0AyEFWzQDVzAgNAMhCVsiMgY0A1dYEUIEAUglNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hCVs1/kk1BTX9gARmH+7WNP1QsDIGNAMhDFsMRDT9FzX8MQA0/xNEMQCIBRNJNfoiVUAABiM1+0IABiI1+0IAADT7RIAIAAAAAAAAAeI0/BZQsDT8FjUHMQAoKjT8FlBmNP80AyEEWzQDIQVbNANXMCA0/iMINP6BAwwyBjQDV1gRQgNgSSEIDEAAWEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABOIbs6mwMgY0AyENWw9ENP8xABJENP80AyEEWzQDIQVbNAMhDls0AyEPWzQDIRBbIjIGNANXSBFCA21IIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEEWzX+IQVbNf0hDls1/CEPWzX7IRBbNfpXSBE1+Uk1BTX4gASQT2RJNPhQsDIGNAMhDVsMRDT4IlVAAJkxADT/E0Q0+VcAEUk19yJbSTX2Ig1EIyIxAIgD4gEqNPsWUAESTTX1gAgAAAAAAAACRjT1FlCwNPUWNQc09SISQQA8sSKyASOyEiSyEDEAshQ0/rIRszT/NP40/TT8NPs0+iMINPo0/AwyBjT2IwkWNPdXCAhQNPdXEAFQQgKRNP80/jT9NPw0+zT6Iwg0+jT8DDIGNPlCAneACAAAAAAAAAH+NPsWULA0+xY1BzT/NP40/TT8NPs0+iMyBjT5QgJPSSEGDEAAu0kkDEAAbCQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFSSJbNf4lWzX9gAQQRq1zNP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyEEWzQDIQVbNAMhCVs0/SIjMgY0A1dYEUIB1iEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyEEWzQDIQVbNANXMCAiIzIGNANXUBFCASFJIwxAAINIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEFWzX9VzAgNfxXUBE1+4AEmouRdLA0+1cAEUk1+iJbIwgWNPpXCAhQNPpXEAFQNfkjNP6IAkM0/zEAEkQ0/zT+FlA0/RZQNPxQNPlQKEsBVwBhZ0ghBjUBMgY1AkIBoUghEYgB/CI0ARJENARJIhJMNAISEURJNQVJSiJbNf8lWzX+gRBbNf1XGCA1/IAEo4mhwTT/FlA0/hZQNP0WUDT8ULCBEa9JNftXABE1+iWvNPpXCAhQNPpXEAFQNfkhEYgBn7EisgEishIkshAyCrIUNP+yEbMxADT/FlA0/RZQNPxQNPlQKEsBVwBhZ0gjNQEyBjUCQgEJNf81/jX9Nfw1+zX6Nfk1+DT9QQAxNP40+gg19zT4NPkWUDT6FlA0+1A0/BZQNP9QNPcWUChLAVcAcWdIJTUBMgY1AkIAwzT4NPkWUDT6FlA0+1A0/BZQNP9QKEsBVwBpZ0gkNQEyBjUCQgCdNf81/jX9Nfw1+zX6Nfk1+DX3NP1BADc0/jT5CDX2NPc0+BZQNPkWUDT6FlA0+xZQNPwWUDT/UDT2FlAoSwFXAGFnSCEINQEyBjUCQgBPsSKyATT/VwARIluyEiSyEDT3shQ0+LIRs7EisgEishIkshAyCbIVMgqyFDT4shGzQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEHr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 113,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v412",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v412",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v510",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_seeOutcome0_187",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_187",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v561",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v478",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v482",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v510",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v582",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bobs_playNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_seeOutcome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Winner_showWinner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v510",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_seeOutcome0_187",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Winner_showWinner0_187",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v561",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T24",
                "name": "v478",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002f5338038062002f53833981016040819052620000269162000423565b6000805543600355620000386200024f565b6040805133815283516020808301919091528085015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001049290620001a2565b6060820152620001173415600762000225565b62000121620002b6565b33815260208084018051516001600160a01b031682840152805160409081015181850152905160609081015181850152840151608084015260016000819055439055516200017291839101620004f3565b6040516020818303038152906040526002908051906020019062000198929190620002f9565b50505050620005da565b620001ac62000388565b60005b60018110156200020257848160018110620001ce57620001ce620004dd565b6020020151828260018110620001e857620001e8620004dd565b602002015280620001f98162000573565b915050620001af565b5081818460018110620002195762000219620004dd565b60200201529392505050565b816200024b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200028262000388565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b162000388565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002b162000388565b82805462000307906200059d565b90600052602060002090601f0160209004810192826200032b576000855562000376565b82601f106200034657805160ff191683800117855562000376565b8280016001018555821562000376579182015b828111156200037657825182559160200191906001019062000359565b5062000384929150620003d5565b5090565b60405180602001604052806001905b620003be604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003975790505090565b5b80821115620003845760008155600101620003d6565b604051608081016001600160401b03811182821017156200041d57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200043757600080fd5b604080519081016001600160401b03811182821017156200046857634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200048257600080fd5b6200048c620003ec565b60208501519092506001600160a01b0381168114620004aa57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b600181101562000567578251805183528581015186840152860151151586830152918401919083019060010162000535565b50505050505092915050565b60006000198214156200059657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b257607f821691505b60208210811415620005d457634e487b7160e01b600052602260045260246000fd5b50919050565b61296980620005ea6000396000f3fe6080604052600436106100d55760003560e01c806383aab11a11610079578063ab53f2c611610056578063ab53f2c6146101b3578063bf2c5b24146101d6578063de736998146101e9578063ebdbfdcc146101fc57005b806383aab11a14610190578063852dc7cf14610198578063a2ac7bdf146101a057005b80633bc5b7bf116100b25780633bc5b7bf1461012857806364f351ea146101555780637eea518c14610168578063832307571461017b57005b80630ca328e4146100de5780631e93b0f1146100f15780632c10a1591461011557005b366100dc57005b005b6100dc6100ec366004611fb3565b61020f565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc610123366004611fb3565b61024f565b34801561013457600080fd5b50610148610143366004611fe4565b61028b565b60405161010c9190612035565b610102610163366004612065565b6102b7565b6100dc610176366004611fb3565b6102f9565b34801561018757600080fd5b50600154610102565b610102610335565b610102610376565b6100dc6101ae36600461207e565b6103bb565b3480156101bf57600080fd5b506101c86103f7565b60405161010c9291906120bc565b6100dc6101e4366004611fb3565b610494565b6100dc6101f7366004611fb3565b6104d0565b6100dc61020a3660046120f6565b61050c565b61023360405180606001604052806000815260200160008152602001600081525090565b61024b6102453684900384018461218d565b82610548565b5050565b61027360405180606001604052806000815260200160008152602001600081525090565b61024b610285368490038401846121f2565b82610808565b60408051606081018252600080825260208201819052918101919091526102b182610a2c565b92915050565b60006102c1611c1b565b60208082015151849052604080516060810182526000808252928101839052908101919091526102f18282610548565b519392505050565b61031d60405180606001604052806000815260200160008152602001600081525090565b61024b61032f368490038401846121f2565b82610aff565b600061033f611c4d565b602081810151516000908190526040805160608101825282815292830182905282015261036c8282610ca0565b6020015192915050565b6000610380611c4d565b6020818101515160019052604080516060810182526000808252928101839052908101919091526103b18282610ca0565b6040015192915050565b6103df60405180606001604052806000815260200160008152602001600081525090565b61024b6103f13684900384018461222a565b82610ca0565b60006060600054600280805461040c906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610438906122b8565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b50505050509050915091509091565b6104b860405180606001604052806000815260200160008152602001600081525090565b61024b6104ca368490038401846121f2565b826111c2565b6104f460405180606001604052806000815260200160008152602001600081525090565b61024b610506368490038401846121f2565b82611380565b61053060405180606001604052806000815260200160008152602001600081525090565b61024b610542368490038401846122ed565b82611532565b6105586008600054146025611749565b815161057390158061056c57508251600154145b6026611749565b600080805560028054610585906122b8565b80601f01602080910402602001604051908101604052809291908181526020018280546105b1906122b8565b80156105fe5780601f106105d3576101008083540402835291602001916105fe565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b505050505080602001905181019061061691906123db565b6040805160208101909152600081529091506106398260c0015143106027611749565b60408051338152855160208083019190915286015151518183015290517f0d0c50c34bf538d7a3a69bc85bb10bcfe23f8f46c119741a7807a8319a6ae2489181900360600190a161068c34156022611749565b81516106b2906001600160a01b031633146106a85760016106ab565b60005b6023611749565b60006106bd33610a2c565b5160018111156106cf576106cf612001565b14156106de5760018152610706565b60016106e933610a2c565b5160018111156106fb576106fb612001565b141561070657600081525b8051610713906024611749565b60208481015151516040519081527f7104448b5a9832bd6089f28959417219af9c596233733862c881f0095769b613910160405180910390a1602084810180515151855233600090815260049092526040909120805460ff19166001908117825591515151910155610783611c86565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808301516107ca9060019061248f565b602080830180519290925260808501518251600390911091015280514360409091015260a08401519051606001526108018161176f565b5050505050565b610818600160005414600b611749565b815161083390158061082c57508251600154145b600c611749565b600080805560028054610845906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610871906122b8565b80156108be5780601f10610893576101008083540402835291602001916108be565b820191906000526020600020905b8154815290600101906020018083116108a157829003601f168201915b50505050508060200190518101906108d69190612533565b90506108e0611cbf565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405161091192919061254f565b60405180910390a161092534156008611749565b608082015151516109389060019061248f565b81515260808201805151602090810151835190910152805151604090810151835190151591015251815161096f91906000906118a5565b816020018190525061099161098a3384602001516001611919565b6009611749565b81516109a9906001600160a01b03163314600a611749565b6109b1611cef565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551610a00918391016125cb565b60405160208183030381529060405260029080519060200190610a24929190611d30565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610a7857610a78612001565b1415610aef576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ab957610ab9612001565b6001811115610aca57610aca612001565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610b0f600260005414600f611749565b8151610b2a901580610b2357508251600154145b6010611749565b600080805560028054610b3c906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610b68906122b8565b8015610bb55780601f10610b8a57610100808354040283529160200191610bb5565b820191906000526020600020905b815481529060010190602001808311610b9857829003601f168201915b5050505050806020019051810190610bcd9190612533565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610c0092919061254f565b60405180910390a1610c143415600d611749565b8051610c2c906001600160a01b03163314600e611749565b610c34611c86565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015282840180516000905280516001940193909352825143920191909152608084015191510152610c9a8161176f565b50505050565b610cb0600760005414601a611749565b8151610ccb901580610cc457508251600154145b601b611749565b600080805560028054610cdd906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d09906122b8565b8015610d565780601f10610d2b57610100808354040283529160200191610d56565b820191906000526020600020905b815481529060010190602001808311610d3957829003601f168201915b5050505050806020019051810190610d6e9190612619565b9050610dbd6040805160c081018252600060608083018281526080840183905260a084018390528352602080840183905284519182018552828252810182905280840191909152909182015290565b610dce8260e001514310601c611749565b7fcb93ca3d7dcbece2320bd6a96f50eaa8eba4e5546e6a4b957804c0c185adc9623385604051610dff9291906126bc565b60405180910390a16000602085015151516001811115610e2157610e21612001565b14156110d057610e3334156016611749565b8151610e59906001600160a01b03163314610e4f576001610e52565b60005b6017611749565b60c08201515151610e6d9015156018611749565b8051600190526080820151815160409081019190915281519051610e949190602001612035565b6040516020818303038152906040528051906020012060001c610eb633610a2c565b604051602001610ec69190612035565b6040516020818303038152906040528051906020012060001c14610eeb576001610eee565b60005b60208281018290526040519182527fff472a19dee716bd7de68bb1d87457c54646e1b710a9bd59fbfaf5c2678c25c5910160405180910390a16020808201805191850191909152516110395760c08201515151610f4d9060019061270f565b604082810180519290925260c08401805151602090810151845182015290515182015192519215159290910191909152820151610f8c90336001611931565b610f94611db4565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a0830151610fe79060019061248f565b6020808301805192909252606085015160a086015183519111910152514360409182015260c08401519083015161102191906000906118a5565b6020820151606001526110338161194a565b50610c9a565b611041611db4565b825181516001600160a01b0391821690526020808501518351921691015260408084015182519091015260608084015182519091015260808084015182519091015260a08301516110949060019061248f565b602080830180519290925260608086015160a0870151845191119201919091528151436040919091015260c0850151915101526110338161194a565b60016020850151515160018111156110ea576110ea612001565b1415610c9a576110fc34156019611749565b7facdd4e8f98f4f6e7b2f0ae51a15c9c65be769f05fab7ffd9a4a0f3b63ba4a51c826080015160405161113191815260200190565b60405180910390a16080820151604084015261114b611db4565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08601518385018051919091528051600194019390935282514392019190915260c0850151915101526110338161194a565b6111d2600760005414601f611749565b81516111ed9015806111e657508251600154145b6020611749565b6000808055600280546111ff906122b8565b80601f016020809104026020016040519081016040528092919081815260200182805461122b906122b8565b80156112785780601f1061124d57610100808354040283529160200191611278565b820191906000526020600020905b81548152906001019060200180831161125b57829003601f168201915b50505050508060200190518101906112909190612619565b90506112a48160e001514310156021611749565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33846040516112d592919061254f565b60405180910390a16112e93415601d611749565b8051611301906001600160a01b03163314601e611749565b611309611db4565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808086015185519091015260a08501518385018051919091528051600094019390935282514392019190915260c084015191510152610c9a8161194a565b611390600860005414602a611749565b81516113ab9015806113a457508251600154145b602b611749565b6000808055600280546113bd906122b8565b80601f01602080910402602001604051908101604052809291908181526020018280546113e9906122b8565b80156114365780601f1061140b57610100808354040283529160200191611436565b820191906000526020600020905b81548152906001019060200180831161141957829003601f168201915b505050505080602001905181019061144e91906123db565b90506114628160c00151431015602c611749565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338460405161149392919061254f565b60405180910390a16114a734156028611749565b80516114bf906001600160a01b031633146029611749565b6114c7611c86565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808501518385018051919091528051600094019390935282514392019190915260a084015191510152610c9a8161176f565b6115426004600054146014611749565b815161155d90158061155657508251600154145b6015611749565b60008080556002805461156f906122b8565b80601f016020809104026020016040519081016040528092919081815260200182805461159b906122b8565b80156115e85780601f106115bd576101008083540402835291602001916115e8565b820191906000526020600020905b8154815290600101906020018083116115cb57829003601f168201915b50505050508060200190518101906116009190612726565b604080513381528551602080830191909152808701518051838501520151606082015290519192507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a919081900360800190a161165f34156011611749565b8051611677906001600160a01b031633146012611749565b6020808401518051908201516040516116c59361169f93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611749565b6116cd611db4565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526080808501518451606090810191909152878401518401518551909201919091528284018051600090528051600194019390935282514392019190915260a084015191510152610c9a8161194a565b8161024b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6040805160208101909152600081528160200151602001511561183d578160000151604001518260200151604001516117a8919061248f565b81526117b2611deb565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015181850152828601805151608086015251015160a0840152835160c084015260086000554360015551611819918391016127b8565b60405160208183030381529060405260029080519060200190610c9a929190611d30565b611845611e40565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015181850152828601805151608086015251015160a0840152600460005543600155516118199183910161281d565b6118ad611e84565b60005b60018110156118f9578481600181106118cb576118cb612577565b60200201518282600181106118e2576118e2612577565b6020020152806118f181612870565b9150506118b0565b508181846001811061190d5761190d612577565b60200201529392505050565b600061192783853085611a35565b90505b9392505050565b61193c838383611b0f565b61194557600080fd5b505050565b60408051602081019091526000815281602001516020015115611a0057816000015160400151826020015160400151611983919061248f565b815261198d611ecf565b8251516001600160a01b03908116825283516020908101519091168183015283516040908101518184015284516060908101518185015285516080908101519085015282860180515160a086015251015160c0840152835160e0840152600760005543600155516118199183910161288b565b8151602080820151915190840151606001515151611a1f929190611931565b6000808055600181905561024b90600290611f1f565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611a9c916128fa565b60006040518083038185875af1925050503d8060008114611ad9576040519150601f19603f3d011682016040523d82523d6000602084013e611ade565b606091505b5091509150611aef82826001611be0565b5080806020019051810190611b049190612916565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611b6e916128fa565b60006040518083038185875af1925050503d8060008114611bab576040519150601f19603f3d011682016040523d82523d6000602084013e611bb0565b606091505b5091509150611bc182826002611be0565b5080806020019051810190611bd69190612916565b9695505050505050565b60608315611bef57508161192a565b825115611bff5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611766565b604051806040016040528060008152602001611c4860408051808201909152600060208201908152815290565b905290565b604051806040016040528060008152602001611c4860408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b8152602001611c48611f5c565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611c48611e84565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611c48611e84565b828054611d3c906122b8565b90600052602060002090601f016020900481019282611d5e5760008555611da4565b82601f10611d7757805160ff1916838001178555611da4565b82800160010185558215611da4579182015b82811115611da4578251825591602001919060010190611d89565b50611db0929150611f86565b5090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190611cb2565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611e33611e84565b8152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611c485b60405180602001604052806001905b611eb9604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611e935790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001611e33611e84565b508054611f2b906122b8565b6000825580601f10611f3b575050565b601f016020900490600052602060002090810190611f599190611f86565b50565b60405180608001604052806000815260200160001515815260200160008152602001611c48611e84565b5b80821115611db05760008155600101611f87565b600060408284031215611fad57600080fd5b50919050565b600060408284031215611fc557600080fd5b61192a8383611f9b565b6001600160a01b0381168114611f5957600080fd5b600060208284031215611ff657600080fd5b813561192a81611fcf565b634e487b7160e01b600052602160045260246000fd5b60028110611f5957634e487b7160e01b600052602160045260246000fd5b8151606082019061204581612017565b808352506020830151151560208301526040830151604083015292915050565b60006020828403121561207757600080fd5b5035919050565b600060808284031215611fad57600080fd5b60005b838110156120ab578181015183820152602001612093565b83811115610c9a5750506000910152565b82815260406020820152600082518060408401526120e1816060850160208701612090565b601f01601f1916919091016060019392505050565b600060608284031215611fad57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561214157612141612108565b60405290565b6040516020810167ffffffffffffffff8111828210171561214157612141612108565b6040516060810167ffffffffffffffff8111828210171561214157612141612108565b600081830360408112156121a057600080fd5b6121a861211e565b833581526020601f19830112156121be57600080fd5b6121c6612147565b91506121d0612147565b602094850135815282529283015250919050565b8015158114611f5957600080fd5b60006040828403121561220457600080fd5b61220c61211e565b82358152602083013561221e816121e4565b60208201529392505050565b6000818303608081121561223d57600080fd5b61224561211e565b833581526060601f198301121561225b57600080fd5b612263612147565b915061226d61216a565b60208501356002811061227f57600080fd5b8152604085013561228f816121e4565b602082015260608501356122a2816121e4565b6040820152825260208101919091529392505050565b600181811c908216806122cc57607f821691505b60208210811415611fad57634e487b7160e01b600052602260045260246000fd5b6000818303606081121561230057600080fd5b61230861211e565b833581526040601f198301121561231e57600080fd5b61232661211e565b60208581013582526040909501358582015293810193909352509092915050565b8051610afa81611fcf565b600082601f83011261236357600080fd5b61236b612147565b8060608085018681111561237e57600080fd5b855b818110156123cf578281890312156123985760008081fd5b6123a061216a565b81518152602080830151818301526040808401516123bd816121e4565b90830152908652909401938201612380565b50919695505050505050565b600061012082840312156123ee57600080fd5b60405160e0810181811067ffffffffffffffff8211171561241157612411612108565b604052825161241f81611fcf565b8152602083015161242f81611fcf565b806020830152506040830151604082015260608301516060820152608083015160808201526124618460a08501612352565b60a0820152610100929092015160c083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156124a2576124a2612479565b500190565b600060e082840312156124b957600080fd5b60405160a0810181811067ffffffffffffffff821117156124dc576124dc612108565b806040525080915082516124ef81611fcf565b815260208301516124ff81611fcf565b8060208301525060408301516040820152606083015160608201526125278460808501612352565b60808201525092915050565b600060e0828403121561254557600080fd5b61192a83836124a7565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b6001811015610c9a578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612591565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e08301916126129084018261258d565b5092915050565b6000610140828403121561262c57600080fd5b604051610100810181811067ffffffffffffffff8211171561265057612650612108565b60405261265c83612347565b815261266a60208401612347565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526126a48460c08501612352565b60c0820152610120929092015160e083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906126e881612017565b80604085015250602081015115156060840152604081015115156080840152509392505050565b60008282101561272157612721612479565b500390565b6000610100828403121561273957600080fd5b60405160c0810181811067ffffffffffffffff8211171561275c5761275c612108565b604052825161276a81611fcf565b8152602083015161277a81611fcf565b806020830152506040830151604082015260608301516060820152608083015160808201526127ac8460a08501612352565b60a08201529392505050565b60006101208201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015161280b60a084018261258d565b5060c083015161010083015292915050565b60006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015161261260a084018261258d565b600060001982141561288457612884612479565b5060010190565b60006101408201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c08301516128e860c084018261258d565b5060e083015161012083015292915050565b6000825161290c818460208701612090565b9190910192915050565b60006020828403121561292857600080fd5b815161192a816121e456fea2646970667358221220617c621d3155ea79c757eb60f86cb3ef1fe8b1d7fb5432f6ec7503585da86f9f64736f6c634300080c0033`,
  BytecodeLen: 12115,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:146:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:102:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:58:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bobs_playNum": Bobs_playNum,
  "Bobs_seeOutcome": Bobs_seeOutcome,
  "Winner_showWinner": Winner_showWinner
  };
export const _APIs = {
  Bobs: {
    playNum: Bobs_playNum,
    seeOutcome: Bobs_seeOutcome
    },
  Winner: {
    showWinner: Winner_showWinner
    }
  };
