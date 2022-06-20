export type DataType = {
   id: string;
   subTitle: {
      one: string;
      two: string;
   };
   title: string;
   ingredient: string;
   countPortion: string;
   countPresent: string | null;
   result?: string;
   mass: string;
   footerCadr: {
      one: string;
      two: string;
      three: string;
   };
   disabled: boolean;
}

export const data: DataType[] = [
  {
    id: '1',
    subTitle: {
      one: 'Сказочное заморское яство',
      two: 'Котэ не одобряет?',
    },
    title: 'Нямушка',
    ingredient: 'с фуа-гра',
    countPortion: '10',
    countPresent: null,
    mass: '0.5',
    footerCadr: {
      one: 'Что сидишь порадуй котэ.',
      two: 'Печень утки разварная с артишоками.',
      three: 'Печалька, с фуа-гра закончился.',
    },
    disabled: false,
  },
  {
    id: '2',
    subTitle: {
      one: 'Сказочное заморское яство',
      two: 'Котэ не одобряет?',
    },
    title: 'Нямушка',
    ingredient: 'с рыбой',
    countPortion: '40',
    countPresent: '2',
    mass: '2',
    footerCadr: {
      one: 'Что сидишь порадуй котэ.',
      two: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      three: 'Печалька, с рыбой закончился.',
    },
    disabled: false,
  },
  {
    id: '3',
    subTitle: {
      one: 'Сказочное заморское яство',
      two: 'Котэ не одобряет?',
    },
    title: 'Нямушка',
    ingredient: 'с курой',
    countPortion: '100',
    countPresent: '5',
    result: 'зказчик доволен',
    mass: '5',
    footerCadr: {
      one: 'Что сидишь порадуй котэ.',
      two: 'Филе из цыплят с трюфелями в бульоне.',
      three: 'Печалька, с курой закончился.',
    },
    disabled: true,
  },
];
