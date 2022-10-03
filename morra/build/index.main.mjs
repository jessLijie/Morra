// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const v501 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v501],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:79:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v501, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
      
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v516 = stdlib.safeAdd(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.safeAdd(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v516],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:35:application',
      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v526 = v521;
    let v533 = v524;
    
    let txn3 = txn2;
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v541;})()) {
      const v548 = stdlib.safeAdd(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
      const v552 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:94:45:application',
        fs: ['at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v553 = stdlib.protect(ctc0, await interact.getGuess(v552), {
        at: './index.rsh:95:44:application',
        fs: ['at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.log(v552), {
        at: './index.rsh:97:23:application',
        fs: ['at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'log',
        who: 'Alice'
        });
      const v554 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:99:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v555 = stdlib.digest([ctc0, ctc0], [v554, v552]);
      const v557 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:101:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:93:15:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v558 = stdlib.digest([ctc0, ctc0], [v557, v553]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v504, v505, v520, v533, v548, v555],
        evt_cnt: 1,
        funcNum: 4,
        lct: v526,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn4;
          
          ;
          const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v548],
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn5;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:35:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn4;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:105:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v561, v571, v558],
          evt_cnt: 1,
          funcNum: 6,
          lct: v562,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn5;
            
            ;
            const v584 = stdlib.safeAdd(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v571],
          tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn6;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:35:application',
            fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn5;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:109:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v584 = stdlib.safeAdd(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v584],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn7;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:35:application',
              fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn6;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:126:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v601 = stdlib.safeAdd(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v601],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn8;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:130:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:76:35:application',
                fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:130:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn7;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:129:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v614 = stdlib.safeAdd(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
              const txn8 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v604, v614, v554, v552],
                evt_cnt: 2,
                funcNum: 12,
                lct: v605,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn8;
                  
                  ;
                  const v632 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v614],
                tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn9;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:141:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:76:35:application',
                  fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:141:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn8;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:140:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v624 = stdlib.digest([ctc0, ctc0], [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:143:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v632 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                const txn9 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v574, v591, v604, v620, v632, v557, v553],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v621,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:146:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn9;
                    
                    ;
                    const v648 = stdlib.safeAdd(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v632],
                  tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn10;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:147:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:76:35:application',
                    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:147:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn9;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:146:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v640 = stdlib.digest([ctc0, ctc0], [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:148:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v648 = stdlib.safeAdd(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                  const v652 = stdlib.safeAdd(v620, v591);
                  stdlib.protect(ctc1, await interact.seeWinning(v652), {
                    at: './index.rsh:154:30:application',
                    fs: ['at ./index.rsh:152:15:application call to [unknown function] (defined at: ./index.rsh:152:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v591, v604, v620, v636, v648, v652],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v637,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:157:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn10;
                      
                      ;
                      let v658;
                      const v659 = stdlib.eq(v636, v604);
                      if (v659) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v660 = stdlib.safeAdd(v620, v591);
                        const v661 = stdlib.eq(v660, v636);
                        if (v661) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v663 = stdlib.eq(v660, v604);
                          if (v663) {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv525 = v658;
                      const cv526 = v655;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v525 = cv525;
                        const v526 = cv526;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v541;})()) {
                          const v548 = stdlib.safeAdd(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                          sim_r.isHalt = false;
                          }
                        else {
                          const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                          const v793 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, '2'), v505);
                          const v795 = v790 ? v504 : v520;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v795,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v648],
                    tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn11;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:158:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:76:35:application',
                      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:158:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn10;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:157:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.safeAdd(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v793 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, '2'), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:170:28:application',
      fs: ['at ./index.rsh:169:11:application call to [unknown function] (defined at: ./index.rsh:169:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.safeAdd(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
  stdlib.protect(ctc1, await interact.acceptWager(v505), {
    at: './index.rsh:84:29:application',
    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v504, v505, v516],
    evt_cnt: 0,
    funcNum: 1,
    lct: v506,
    onlyIf: true,
    out_tys: [],
    pay: [v505, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
      
      const v524 = stdlib.add(v505, v505);
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v526 = v521;
      const v533 = v524;
      
      if (await (async () => {
        const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v541;})()) {
        const v548 = stdlib.safeAdd(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v793 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, '2'), v505);
        const v795 = v790 ? v504 : v520;
        sim_r.txns.push({
          kind: 'from',
          to: v795,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v516],
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:35:application',
      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v526 = v521;
    let v533 = v524;
    
    let txn3 = txn2;
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v541;})()) {
      const v548 = stdlib.safeAdd(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v548],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn5;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:35:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn4;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:105:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v571 = stdlib.safeAdd(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v571],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn6;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:35:application',
            fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn5;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:109:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v584 = stdlib.safeAdd(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
          const v588 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:119:45:application',
            fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
            msg: 'getHand',
            who: 'Bob'
            });
          const v589 = stdlib.protect(ctc0, await interact.getGuess(v588), {
            at: './index.rsh:120:44:application',
            fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v574, v584, v588],
            evt_cnt: 1,
            funcNum: 8,
            lct: v575,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:126:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn6;
              
              ;
              const v601 = stdlib.safeAdd(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v584],
            tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn7;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:35:application',
              fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn6;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:126:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v601 = stdlib.safeAdd(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
            const txn7 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v591, v601, v589],
              evt_cnt: 1,
              funcNum: 10,
              lct: v592,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:129:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn7;
                
                ;
                const v614 = stdlib.safeAdd(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v601],
              tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn8;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:130:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:76:35:application',
                fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:130:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn7;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:129:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v614 = stdlib.safeAdd(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v614],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn9;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:141:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:76:35:application',
                  fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:141:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn8;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:140:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v624 = stdlib.digest([ctc0, ctc0], [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:143:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v632 = stdlib.safeAdd(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v632],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn10;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:147:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:76:35:application',
                    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:147:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn9;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:146:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v640 = stdlib.digest([ctc0, ctc0], [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:148:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v648 = stdlib.safeAdd(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '30'));
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v648],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn11;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:158:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:76:35:application',
                      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:158:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn10;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:157:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v660 = stdlib.safeAdd(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    txn3 = txn10;
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v793 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, '2'), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:170:28:application',
      fs: ['at ./index.rsh:169:11:application call to [unknown function] (defined at: ./index.rsh:169:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAVAAFIIB4RcAIFCAkNDwuQAQdQmAGIAaABKCYDAQABAQAiNQAxGEEIjipkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQAR9SSELDEACYkkhDAxAAUxJgRAMQADySSEFDEAAUyEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABACB0o6wMgY0AyEGWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgegSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gVhbNf6BaFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEGWwxENP8xABJENP00/hJBAAYjNftCACw0A4FgWzQDIRBbCEk1+jT9EkEAByEHNftCABE0+jT+EkEABiI1+0IAAyM1+zT/NAMlWzQDVyggNPsyBjQDJFtCBqxIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gARGR4xesDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IGtUmBDgxAALVIIQw0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf5XKCA1/SRbNfwhBls1+4F4WzX6gYABWzX5STUFSSJbNfghCVs194AEva7n1TT4FlA09xZQsDIGNAMhElsMRDT/MQASRDQDV1AgNPgWNPcWUAESRDIGIQQINfY0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+RZQNPcWUDT2FlAoSwFXAHhnSCEFNQEyBjUCQgYVSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AEIp+XA7AyBjQDIRNbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBaZJIQ0MQAEUSYEMDEAAukghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdwIDX7IQ5bNfohEVs1+Uk1BUkiWzX4IQlbNfeABMOqkME0+BZQNPcWULAyBjQDIRNbDEQ0/zEAEkQ0A1dQIDT4FjT3FlABEkQyBiEECDX2NP80/hZQNP1QNPwWUDT7UDT6FlA0+RZQNPcWUDT2FlAoSwFXAH9nKUsBV38RZ0ghDDUBMgY1AkIE+kghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyERWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSLSYEKDEAAn0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7V3AgNfohDls1+Uk1BRc1+IAEp4vCCzT4FlCwMgY0AyERWwxENP0xABJEMgYhBAg19zT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCzUBMgY1AkIEAUghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyEOWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOSSSEIDEAB0UkhDwxAAOxJIQkMQACVSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yVbNf5XKCA1/SRbNfxXUCA1+1dwIDX6STUFFzX5gAQv2ukdNPkWULAyBjQDIQ5bDEQ0/TEAEkQyBiEECDX4NP80/hZQNP1QNPwWUDT7UDT6UDT5FlA0+BZQKEsBVwB/ZylLAVd/IWdIIQ01ATIGNQJCAwRIIQ80ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATiG7OpsDIGNAMhBlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICmEmBBgxAAIdIIQ80ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7STUFNfqABGnuOz40+lCwMgY0AyEGWwxENP8xABJEMgYhBAg1+TT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQKEsBVwB/ZylLAVd/GWdIIQo1ATIGNQJCAiZIIQg0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATMmZJcsDIGNAMhEFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IBukkhBwxAAL5JgQQMQAB3SCEINAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/lcoIDX9JFs1/Ek1BTX7gAQ4sCMtNPtQsDIGNAMhEFsMRDT/MQASRDIGIQQINfo0/zT+FlA0/VA0/BZQNPtQNPoWUChLAVcAeGdIIQ81ATIGNQJCAVEhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEUWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgD1SSMMQABCSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEUWwxENP+IAS40A1cAIDT/MQAjMgY0/0kIQgBRSIGgjQaIARMiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gA7TIGIQQINf4xADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgB4Nf81/jX9Nfw1+zX6NP0jEkEAKzT+IQQINfk0+jT7FlA0/FA0/xZQNPkWUChLAVcAWGdIIQg1ATIGNQJCADqxIrIBIQc0+wuyCCOyEDT8NPo0/SEHEk2yB7NCAAAxGSEIEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
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
    "name": "_reach_e12",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
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
    "name": "_reach_e14",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
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
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
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
        "internalType": "struct T7",
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
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
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
    "name": "_reach_m12",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
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
    "name": "_reach_m14",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
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
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
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
        "internalType": "struct T7",
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
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T7",
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
  Bytecode: `0x608060405260405162002d6d38038062002d6d83398101604081905262000026916200024a565b60008080554360035560408051602080820183529281528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a160208201515162000095903414600762000122565b620000a243601e6200014d565b81526040805160608082018352600060208084018281528486018381523380875289840151518352885182526001948590554390945586519283019390935251948101949094525190830152906080016040516020818303038152906040526002908051906020019062000118929190620001a4565b5050505062000350565b81620001495760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200015c8382620002ec565b91508110156200019e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000140565b92915050565b828054620001b29062000313565b90600052602060002090601f016020900481019282620001d6576000855562000221565b82601f10620001f157805160ff191683800117855562000221565b8280016001018555821562000221579182015b828111156200022157825182559160200191906001019062000204565b506200022f92915062000233565b5090565b5b808211156200022f576000815560010162000234565b60008183036040808212156200025f57600080fd5b80518082016001600160401b0380821183831017156200028f57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002a957600080fd5b835194506020850191508482108183111715620002d657634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600082198211156200030e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b612a0d80620003606000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b6101136101473660046123b4565b6102a1565b61011361015a3660046123b4565b61053b565b61011361016d3660046123b4565b6106be565b6101136101803660046123e9565b610875565b6101136101933660046123b4565b610ae7565b6101136101a63660046123e9565b610c42565b6101136101b93660046123b4565b610eb4565b3480156101ca57600080fd5b50600154610126565b6101136101e13660046123b4565b611017565b6101136101f43660046123b4565b6111ae565b6101136102073660046123b4565b611308565b61011361021a3660046123b4565b611544565b61011361022d3660046123b4565b61169f565b34801561023e57600080fd5b506102476118bf565b604051610130929190612405565b6101136102633660046123b4565b61195c565b6101136102763660046123b4565b611b7e565b6101136102893660046123b4565b611cd8565b61011361029c3660046123b4565b611e32565b6102b16009600054146026612054565b6102cb813515806102c457506001548235145b6027612054565b6000808055600280546102dd90612462565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612462565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e91906124eb565b90506103866040518060200160405280600081525090565b6103978260c0015143106028612054565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516103c8929190612589565b60405180910390a16103dc34156024612054565b60408201516103f7906001600160a01b031633146025612054565b61040243601e61207a565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b6000554360015590516105109183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610534929190612274565b5050505050565b61054b6001600054146009612054565b6105658135158061055e57506001548235145b600a612054565b60008080556002805461057790612462565b80601f01602080910402602001604051908101604052809291908181526020018280546105a390612462565b80156105f05780601f106105c5576101008083540402835291602001916105f0565b820191906000526020600020905b8154815290600101906020018083116105d357829003601f168201915b505050505080602001905181019061060891906125b0565b905061061b81604001514310600b612054565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161064c92919061261f565b60405180910390a1610665816020015134146008612054565b61066d6122f8565b815181516001600160a01b03909116905260208083018051835183015282513360409091015281830180516001905251439201919091525180016020820151604001526106b9816120cd565b505050565b6106ce600f60005414604b612054565b6106e8813515806106e157506001548235145b604c612054565b6000808055600280546106fa90612462565b80601f016020809104026020016040519081016040528092919081815260200182805461072690612462565b80156107735780601f1061074857610100808354040283529160200191610773565b820191906000526020600020905b81548152906001019060200180831161075657829003601f168201915b505050505080602001905181019061078b91906126e3565b90506107a0816101000151431015604d612054565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b33836040516107d192919061261f565b60405180910390a16107e534156049612054565b8051610819906001600160a01b0316331461080f5760408201516001600160a01b03163314610812565b60015b604a612054565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f1935050505015801561085a573d6000803e3d6000fd5b50600080805560018190556108719060029061234a565b5050565b610885600f600054146046612054565b61089f8135158061089857506001548235145b6047612054565b6000808055600280546108b190612462565b80601f01602080910402602001604051908101604052809291908181526020018280546108dd90612462565b801561092a5780601f106108ff5761010080835404028352916020019161092a565b820191906000526020600020905b81548152906001019060200180831161090d57829003601f168201915b505050505080602001905181019061094291906126e3565b905061095a6040518060200160405280600081525090565b61096c82610100015143106048612054565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d997338460405161099d929190612700565b60405180910390a16109b134156043612054565b81516109c9906001600160a01b031633146044612054565b60408051610a15916109ef91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360800151146045612054565b610a2043601e61207a565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152601160005543600155905161051091839101612731565b610af7600d600054146040612054565b610b1181351580610b0a57506001548235145b6041612054565b600080805560028054610b2390612462565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4f90612462565b8015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b5050505050806020019051810190610bb491906126e3565b9050610bc98161010001514310156042612054565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610bfa92919061261f565b60405180910390a1610c0e3415603e612054565b8051610819906001600160a01b03163314610c385760408201516001600160a01b03163314610c3b565b60015b603f612054565b610c52600d60005414603b612054565b610c6c81351580610c6557506001548235145b603c612054565b600080805560028054610c7e90612462565b80601f0160208091040260200160405190810160405280929190818152602001828054610caa90612462565b8015610cf75780601f10610ccc57610100808354040283529160200191610cf7565b820191906000526020600020905b815481529060010190602001808311610cda57829003601f168201915b5050505050806020019051810190610d0f91906126e3565b9050610d276040518060200160405280600081525090565b610d398261010001514310603d612054565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610d6a929190612700565b60405180910390a1610d7e34156038612054565b8151610d96906001600160a01b031633146039612054565b60408051610de291610dbc91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114603a612054565b610ded43601e61207a565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152600f60005543600155905161051091839101612731565b610ec4600160005414600d612054565b610ede81351580610ed757506001548235145b600e612054565b600080805560028054610ef090612462565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1c90612462565b8015610f695780601f10610f3e57610100808354040283529160200191610f69565b820191906000526020600020905b815481529060010190602001808311610f4c57829003601f168201915b5050505050806020019051810190610f8191906125b0565b9050610f958160400151431015600f612054565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610fc692919061261f565b60405180910390a1610fda3415600c612054565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561085a573d6000803e3d6000fd5b611027600b600054146035612054565b6110418135158061103a57506001548235145b6036612054565b60008080556002805461105390612462565b80601f016020809104026020016040519081016040528092919081815260200182805461107f90612462565b80156110cc5780601f106110a1576101008083540402835291602001916110cc565b820191906000526020600020905b8154815290600101906020018083116110af57829003601f168201915b50505050508060200190518101906110e4919061279e565b90506110f88160e001514310156037612054565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a550338360405161112992919061261f565b60405180910390a161113d34156033612054565b8051611171906001600160a01b031633146111675760408201516001600160a01b0316331461116a565b60015b6034612054565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561085a573d6000803e3d6000fd5b6111be6005600054146017612054565b6111d8813515806111d157506001548235145b6018612054565b6000808055600280546111ea90612462565b80601f016020809104026020016040519081016040528092919081815260200182805461121690612462565b80156112635780601f1061123857610100808354040283529160200191611263565b820191906000526020600020905b81548152906001019060200180831161124657829003601f168201915b505050505080602001905181019061127b919061284a565b905061128f81608001514310156019612054565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516112c092919061261f565b60405180910390a16112d434156015612054565b8051610819906001600160a01b031633146112fe5760408201516001600160a01b03163314611301565b60015b6016612054565b611318600760005414601c612054565b6113328135158061132b57506001548235145b601d612054565b60008080556002805461134490612462565b80601f016020809104026020016040519081016040528092919081815260200182805461137090612462565b80156113bd5780601f10611392576101008083540402835291602001916113bd565b820191906000526020600020905b8154815290600101906020018083116113a057829003601f168201915b50505050508060200190518101906113d591906128d4565b90506113ed6040518060200160405280600081525090565b6113fe8260a001514310601e612054565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161142f929190612589565b60405180910390a16114433415601a612054565b815161145b906001600160a01b03163314601b612054565b61146643601e61207a565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e082015261010001610510565b6115546011600054146055612054565b61156e8135158061156757506001548235145b6056612054565b60008080556002805461158090612462565b80601f01602080910402602001604051908101604052809291908181526020018280546115ac90612462565b80156115f95780601f106115ce576101008083540402835291602001916115f9565b820191906000526020600020905b8154815290600101906020018083116115dc57829003601f168201915b505050505080602001905181019061161191906126e3565b90506116268161010001514310156057612054565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338360405161165792919061261f565b60405180910390a161166b34156053612054565b8051611171906001600160a01b031633146116955760408201516001600160a01b03163314611698565b60015b6054612054565b6116af6005600054146012612054565b6116c9813515806116c257506001548235145b6013612054565b6000808055600280546116db90612462565b80601f016020809104026020016040519081016040528092919081815260200182805461170790612462565b80156117545780601f1061172957610100808354040283529160200191611754565b820191906000526020600020905b81548152906001019060200180831161173757829003601f168201915b505050505080602001905181019061176c919061284a565b90506117846040518060200160405280600081525090565b611795826080015143106014612054565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516117c6929190612589565b60405180910390a16117da34156010612054565b81516117f2906001600160a01b031633146011612054565b6117fd43601e61207a565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e001610510565b6000606060005460028080546118d490612462565b80601f016020809104026020016040519081016040528092919081815260200182805461190090612462565b801561194d5780601f106119225761010080835404028352916020019161194d565b820191906000526020600020905b81548152906001019060200180831161193057829003601f168201915b50505050509050915091509091565b61196c600b600054146030612054565b6119868135158061197f57506001548235145b6031612054565b60008080556002805461199890612462565b80601f01602080910402602001604051908101604052809291908181526020018280546119c490612462565b8015611a115780601f106119e657610100808354040283529160200191611a11565b820191906000526020600020905b8154815290600101906020018083116119f457829003601f168201915b5050505050806020019051810190611a29919061279e565b9050611a416040518060200160405280600081525090565b611a528260e0015143106032612054565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611a83929190612589565b60405180910390a1611a973415602e612054565b6040820151611ab2906001600160a01b03163314602f612054565b611abd43601e61207a565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d60005543600155905161051091839101612731565b611b8e6007600054146021612054565b611ba881351580611ba157506001548235145b6022612054565b600080805560028054611bba90612462565b80601f0160208091040260200160405190810160405280929190818152602001828054611be690612462565b8015611c335780601f10611c0857610100808354040283529160200191611c33565b820191906000526020600020905b815481529060010190602001808311611c1657829003601f168201915b5050505050806020019051810190611c4b91906128d4565b9050611c5f8160a001514310156023612054565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611c9092919061261f565b60405180910390a1611ca43415601f612054565b8051610819906001600160a01b03163314611cce5760408201516001600160a01b03163314611cd1565b60015b6020612054565b611ce8600960005414602b612054565b611d0281351580611cfb57506001548235145b602c612054565b600080805560028054611d1490612462565b80601f0160208091040260200160405190810160405280929190818152602001828054611d4090612462565b8015611d8d5780601f10611d6257610100808354040283529160200191611d8d565b820191906000526020600020905b815481529060010190602001808311611d7057829003601f168201915b5050505050806020019051810190611da591906124eb565b9050611db98160c00151431015602d612054565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611dea92919061261f565b60405180910390a1611dfe34156029612054565b8051611171906001600160a01b03163314611e285760408201516001600160a01b03163314611e2b565b60015b602a612054565b611e426011600054146050612054565b611e5c81351580611e5557506001548235145b6051612054565b600080805560028054611e6e90612462565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9a90612462565b8015611ee75780601f10611ebc57610100808354040283529160200191611ee7565b820191906000526020600020905b815481529060010190602001808311611eca57829003601f168201915b5050505050806020019051810190611eff91906126e3565b9050611f1e604051806040016040528060008152602001600081525090565b611f3082610100015143106052612054565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee43384604051611f61929190612589565b60405180910390a1611f753415604e612054565b8151611f8d906001600160a01b03163314604f612054565b8160a001518260e001511415611fa65760018152611ff1565b611fb88260c00151836080015161207a565b6020820181905260e08301511415611fd35760028152611ff1565b8160a0015181602001511415611fec5760008152611ff1565b600181525b611ff96122f8565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528351818401805191909152805143920191909152606085015190519091015261204e816120cd565b50505050565b816108715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082612087838261297e565b91508110156120c75760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612071565b92915050565b604080516020810190915260008152602082015151600114156121b2576120fd826020015160200151601e61207a565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c09091019093528051919261204e9260029290910190612274565b6020820151516002146121ca578151604001516121ce565b8151515b6001600160a01b03166108fc6121ed6002856000015160200151612215565b6040518115909202916000818181858888f1935050505015801561085a573d6000803e3d6000fd5b60008115806122395750828261222b8183612996565b925061223790836129b5565b145b6120c75760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612071565b82805461228090612462565b90600052602060002090601f0160209004810192826122a257600085556122e8565b82601f106122bb57805160ff19168380011785556122e8565b828001600101855582156122e8579182015b828111156122e85782518255916020019190600101906122cd565b506122f4929150612387565b5090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161234560405180606001604052806000815260200160008152602001600081525090565b905290565b50805461235690612462565b6000825580601f10612366575050565b601f0160209004906000526020600020908101906123849190612387565b50565b5b808211156122f45760008155600101612388565b6000604082840312156123ae57600080fd5b50919050565b6000604082840312156123c657600080fd5b6123d0838361239c565b9392505050565b6000606082840312156123ae57600080fd5b6000606082840312156123fb57600080fd5b6123d083836123d7565b82815260006020604081840152835180604085015260005b818110156124395785810183015185820160600152820161241d565b8181111561244b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061247657607f821691505b602082108114156123ae57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156124c957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146124e657600080fd5b919050565b600060e082840312156124fd57600080fd5b60405160e0810181811067ffffffffffffffff8211171561252e57634e487b7160e01b600052604160045260246000fd5b60405261253a836124cf565b815260208301516020820152612552604084016124cf565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016123d0602083018480358252602090810135910152565b6000606082840312156125c257600080fd5b6040516060810181811067ffffffffffffffff821117156125f357634e487b7160e01b600052604160045260246000fd5b6040526125ff836124cf565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461264d57600080fd5b80604085015250509392505050565b6000610120828403121561266f57600080fd5b612677612497565b9050612682826124cf565b81526020820151602082015261269a604083016124cf565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b600061012082840312156126f657600080fd5b6123d0838361265c565b6001600160a01b0383168152608081016123d060208301848035825260208082013590830152604090810135910152565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016120c7565b60006101008083850312156127b257600080fd5b6040519081019067ffffffffffffffff821181831017156127e357634e487b7160e01b600052604160045260246000fd5b816040526127f0846124cf565b815260208401516020820152612808604085016124cf565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a0828403121561285c57600080fd5b60405160a0810181811067ffffffffffffffff8211171561288d57634e487b7160e01b600052604160045260246000fd5b604052612899836124cf565b8152602083015160208201526128b1604084016124cf565b604082015260608301516060820152608083015160808201528091505092915050565b600060c082840312156128e657600080fd5b60405160c0810181811067ffffffffffffffff8211171561291757634e487b7160e01b600052604160045260246000fd5b604052612923836124cf565b81526020830151602082015261293b604084016124cf565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561299157612991612968565b500190565b60008160001904831182151516156129b0576129b0612968565b500290565b6000826129d257634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220892db4e6432ec8ab92fdbd50742a5662e8882bedd2d12cb98e530d682f60c46b64736f6c634300080c0033`,
  BytecodeLen: 11629,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:81:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:167:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:92:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:107:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:112:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:128:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:130:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:133:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:141:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:144:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:147:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:150:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:158:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
  "Bob": Bob
  };
export const _APIs = {
  };
