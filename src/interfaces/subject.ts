import {observe} from './observe';

export interface subject {
    observes: observe[];
    subscribe(obs: observe);
    unsubscribe(obs: observe);
    notifyobservers();
}