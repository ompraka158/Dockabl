import { Ownership } from '../models/ownership';

export const OWNERSHIPS: Ownership[] = [
    { id: 11, name: 'Individual' },
    { id: 12, name: 'Multiple' },
    { id: 13, name: 'Shared' }
];

export const appConstants = {
    messages: {
        createObjective: 'Create Objective'
    }
}

export const alignments = [
    {
        id: 1,
        name: 'Functional Skills',
        options: [
            { id: 1, name: 'Engineering' },
            { id: 2, name: 'Design' },
            { id: 3, name: 'Sales' }
        ]
    },
    {
        id: 2,
        name: 'BSC Category',
        options: [
            { id: 1, name: 'Business' },
            { id: 2, name: 'People' },
            { id: 3, name: 'Process' },
            { id: 4, name: 'Customer' }
        ]
    }
]

export const alignmentOptions = [
    { id: 1, name: 'Functiona Skills' },
    { id: 2, name: 'BSC Category' }
]

export const SUGGESTIONS = [
    { "id": "001", "name": "Ram Kumar" },
    { "id": "002", "name": "Suman Jha" },
    { "id": "003", "name": "Rohan Thakur" },
    { "id": "004", "name": "Shyam Bhullar" },
    { "id": "005", "name": "Raveena Khullar" }
]