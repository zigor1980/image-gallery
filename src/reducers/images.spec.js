import { expect } from 'chai';
import images from './images';
import * as ActionType from '../actions/fetchImages';


describe('Reducer::images', () => {
    it('returns items (empty array), offset (0), end(false) if state is undefined', () => {
        // setup
        const state = null;
        const expectedNewState = {
            items: [],
            offset: 0,
            end: false,
        };

        // execute
        const newState = images(state, { type: 'unknown' });

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGE_ADD returns new state with added images', () => {
        // setup
        const state =
            {
                items: [{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }],
                offset: 0,
                end: false,
            };
        const newMessage = [{ name: 'image4' }];
        const action = {
            type:'IMAGES_FETCH',
            data:newMessage,
            offset:1,
            end:false,
        };
        const expectedNewState =
             {
                 items: [{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }],
                 offset:1,
                 end:false,
             };
        // execute

        const newState = images(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
});
