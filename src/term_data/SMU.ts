import { Uni } from './types';

const SMU: Uni = {
  name: 'Singapore Management University',
  years: [
    {
      label: 'AY2020-21',
      terms: [
        {
          type: 'term_2',
          label: 'Term 2',
          periods: [
            {
              type: 'class',
              date_start: '11-01-2021',
              date_end: '28-02-2021',
            },
            {
              type: 'recess',
              date_start: '01-03-2021',
              date_end: '07-03-2021',
            },
            {
              type: 'class',
              date_start: '08-03-2021',
              date_end: '18-04-2021',
            },
            {
              type: 'exam',
              date_start: '19-04-2021',
              date_end: '02-05-2021',
            },
            {
              type: 'vacation',
              date_start: '03-05-2021',
              date_end: '15-08-2021',
            },
          ],
        },
      ],
    },
    {
      label: 'AY2021-22',
      terms: [
        {
          type: 'term_1',
          label: 'Term 1',
          periods: [
            {
              type: 'class',
              date_start: '16-08-2021',
              date_end: '03-10-2021',
            },
            {
              type: 'recess',
              date_start: '04-10-2021',
              date_end: '10-10-2021',
            },
            {
              type: 'class',
              date_start: '11-10-2021',
              date_end: '21-11-2021',
            },
            {
              type: 'exam',
              date_start: '22-11-2021',
              date_end: '05-12-2021',
            },
            {
              type: 'vacation',
              date_start: '06-12-2021',
              date_end: '09-01-2022',
            },
          ],
        },
        {
          type: 'term_2',
          label: 'Term 2',
          periods: [
            {
              type: 'class',
              date_start: '10-01-2022',
              date_end: '27-02-2022',
            },
            {
              type: 'recess',
              date_start: '28-02-2022',
              date_end: '06-03-2022',
            },
            {
              type: 'class',
              date_start: '07-03-2022',
              date_end: '17-04-2022',
            },
            {
              type: 'exam',
              date_start: '18-04-2022',
              date_end: '01-05-2022',
            },
            {
              type: 'vacation',
              date_start: '02-05-2022',
              date_end: '14-08-2022',
            },
          ],
        },
        {
          type: 'term_2_modified',
          label: 'Modified Term 2',
          periods: [
            {
              type: 'vacation',
              date_start: '29-11-2021',
              date_end: '20-02-2022',
            },
            {
              type: 'class',
              date_start: '21-02-2022',
              date_end: '10-04-2022',
            },
            {
              type: 'recess',
              date_start: '11-04-2022',
              date_end: '17-04-2022',
            },
            {
              type: 'class',
              date_start: '18-04-2022',
              date_end: '29-05-2022',
            },
            {
              type: 'exam',
              date_start: '30-05-2022',
              date_end: '05-06-2022',
            },
            {
              type: 'vacation',
              date_start: '06-06-2022',
              date_end: '14-08-2022',
            },
          ],
        },
      ],
    },
  ],
};

export default SMU;
