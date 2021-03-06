import * as  _ from 'lodash';

export interface PathType extends RoutePathNamesType {
  path: any;
}

type RoutePathNamesType = { [N in string]: PathType & any };

export const routePathNames: RoutePathNamesType = {
  main: {
    dashboard: {},
    campaign: {
      create: {
        details: {},
        contacts: {},
        texters: {},
        scripts: {},
      },
      view: {}
    },
    messaging: {
      campaign: {},
      client: {},
      view: {
        inbox: {},
      },
      assignments: {
        'send-initial-text': {},
      },
      inbox: {},
      'self-assignment-requests': {},
      'reassign-replies': {},
    },
    client: {
      view: {},
      create: {},
      edit: {},
    },
    'contact-list': {
      create: {},
      edit: {},
      view: {},
    },
    user: {
      profile: {},
    },
    setting: {},
  },
  login: {
    'two-factor-auth': {},
  }
};
let routesFilled = false;

export const getRoutes = (obj: any = routePathNames, prefix = ''): any => {
    routesFilled = true;
    return Object.keys({...obj, path: ''}).reduce((res: any, el: any) => {
      let result;
      if (Array.isArray(obj[el])) {
        result = res;
      } else if (typeof obj[el] === 'object' && obj[el] !== null) {
        result = getRoutes(obj[el], prefix + el + '.');
      } else {
        result = prefix + el;
      }
      if (result) {
        _.set(routePathNames, result, result.replace(/[.]/g, '/').replace('/path', ''));
      }
      return result;
    }, []);
};

export const initializeRoutes = () => !routesFilled && getRoutes();





