import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'dashboard',
        title: 'DashBoard',
        type: 'item',
        url: '/dashboard',
    },
    {
        id: 'singin',
        title: 'SignIn',
        type: 'item',
        url: '/signin',
    },
    {
        id: 'setup',
        title: 'Setup',
        type: 'group',
        children: [
            {
                id: 'divisions',
                title: 'Division',
                type: 'item',
                url: '/setup/divisions',
            }
        ]
    },
];
