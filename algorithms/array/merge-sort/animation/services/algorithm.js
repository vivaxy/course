/**
 * @since 2018-05-20 14:16:10
 * @author vivaxy
 */

import * as EVENT_TYPES from '../../../../_animation/enums/event-types.js';
import * as ACTION_TYPES from '../enums/action-types.js';

function init(events) {
  events.on(EVENT_TYPES.REQUEST_ANIMATION_ACTIONS, requestAnimationActions);

  function requestAnimationActions(eventId, eventData) {
    const { unsortedArray } = eventData;
    const actions = mergeSort(unsortedArray, 0, unsortedArray.length - 1);

    let actionIndex = 0;
    events.on(EVENT_TYPES.ON_AN_ANIMATION_ACTION_END, () => {
      actionIndex++;
      if (actionIndex < actions.length) {
        events.emit(EVENT_TYPES.APPLY_AN_ANIMATION_ACTION, actions[actionIndex]);
      } else {
        events.emit(EVENT_TYPES.ON_ANIMATION_ACTIONS_END, actions);
      }
    });

    events.emit(EVENT_TYPES.ON_ANIMATION_ACTIONS_START, actions);
    events.emit(EVENT_TYPES.APPLY_AN_ANIMATION_ACTION, actions[actionIndex]);
  }

  function mergeSort(A, p, r) {
    if (p >= r) {
      return [];
    }
    let q = Math.floor((p + r) / 2);
    let actions = mergeSort(A, p, q);
    actions = actions.concat(mergeSort(A, q + 1, r));
    return actions.concat(merge(A, p, q, r));
  }

  function merge(A, p, q, r) {
    let actions = [];
    let B = [];
    actions.push({
      type: ACTION_TYPES.CREATE_A_NEW_ARRAY,
      arrayName: 'B',
      fromIndex: p,
      toIndex: q,
    });
    for (let i = p; i <= q; i++) {
      B.push(A[i]);
      actions.push({
        type: ACTION_TYPES.PUSH_TO_AN_ARRAY,
        arrayName: 'B',
        elementIndex: i,
        index: B.length - 1,
        value: A[i],
      });
    }
    B.push(Infinity);
    let C = [];
    actions.push({
      type: ACTION_TYPES.CREATE_A_NEW_ARRAY,
      arrayName: 'C',
      fromIndex: q + 1,
      toIndex: r,
    });
    for (let j = q + 1; j <= r; j++) {
      C.push(A[j]);
      actions.push({
        type: ACTION_TYPES.PUSH_TO_AN_ARRAY,
        arrayName: 'C',
        elementIndex: j,
        index: C.length - 1,
        value: A[j],
      });
    }
    C.push(Infinity);
    let i = 0;
    actions.push({
      type: ACTION_TYPES.MARK_ARRAY_INDEX,
      arrayName: 'B',
      index: i,
    });
    let j = 0;
    actions.push({
      type: ACTION_TYPES.MARK_ARRAY_INDEX,
      arrayName: 'C',
      index: j,
    });
    for (let k = p; k <= r; k++) {
      actions.push({
        type: ACTION_TYPES.COMPARE,
      });
      if (B[i] <= C[j]) {
        A[k] = B[i];
        i++;
        actions.push({
          type: ACTION_TYPES.ASSIGN,
          fromArrayName: 'B',
          index: k,
        });
        actions.push({
          type: ACTION_TYPES.MARK_ARRAY_INDEX,
          arrayName: 'B',
          index: i,
        });
      } else {
        A[k] = C[j];
        j++;
        actions.push({
          type: ACTION_TYPES.ASSIGN,
          fromArrayName: 'C',
          index: k,
        });
        actions.push({
          type: ACTION_TYPES.MARK_ARRAY_INDEX,
          arrayName: 'C',
          index: j,
        });
      }
    }
    actions.push({
      type: ACTION_TYPES.DESTROY_NEW_ARRAYS,
    });
    return actions;
  }

}

export default { init };
