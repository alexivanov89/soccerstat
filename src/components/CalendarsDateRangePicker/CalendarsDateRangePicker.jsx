import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import buildLocalizeFn from 'date-fns/locale/_lib/buildLocalizeFn';
import { ru } from 'date-fns/locale';
import { getDateEndMonth, getDateStartMonth } from './utils';
import { endOfDay, format, parse, startOfDay } from 'date-fns';
import { SetDateFrom, SetDateTo } from '../../store/actions/creator/filters';
import makeStyles from '@mui/styles/makeStyles';
import 'react-datepicker/dist/react-datepicker.css';

const monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  wide: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
};

if (ru?.localize) {
  ru.localize.month = buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    defaultFormattingWidth: 'wide',
  });
}

registerLocale('customRu', ru);

const useStyles = makeStyles((theme) => ({
  arrow: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderColor: '#616973',
    borderWidth: '1px 1px 0 0',
    borderStyle: 'solid',
    transform: 'rotate(135deg)',
    top: 17,
    right: 34,
  },
  root: {
    width: 328,
    height: 48,
    padding: '0px 2px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    '&:focus-within': {
      '& input': {
        outline: 'none',
        borderRadius: '8px',
        border: '1px solid #0049D9',
        boxShadow: '0px 0px 0px 2px rgba(0, 73, 217, 0.5)',
      },
      '& > span': {
        borderColor: '#0049D9',
      },
    },
    '& input': {
      width: '100%',
      height: 48,
      color: 'white',
      background: 'rgba(0, 0, 100, 0.06)',
      border: 'none',
      borderRadius: 8,
      padding: ' 8px 8px 8px 16px',
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
      '&::placeholder': {
        color: '#989DA6',
        fontWeight: 500,
        opacity: 1,
      },
    },
    '& div.react-datepicker-popper[data-placement^=bottom]': {
      paddingTop: 4,
    },
    '& div.react-datepicker': {
      border: 'none',
      borderRadius: '12px',
    },
    '& div.react-datepicker__month-container': {
      borderBottom: '1px solid #E1E5ED',
      borderLeft: '1px solid #E1E5ED',
      borderRight: '1px solid #E1E5ED',
      borderRadius: '12px',
    },
    '& div.react-datepicker__header': {
      height: 56,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
      padding: 16,
      background: '#FFFFFF',
      textAlign: 'left',
      borderTopRightRadius: '12px',
      borderTopLeftRadius: '12px',
      borderBottom: '1px solid #E1E5ED',
    },
    '& div.react-datepicker__current-month': {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
    },
    '& div.react-datepicker__day-names': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      color: '#616973',
      marginLeft: '-16px',
      marginTop: 16,
      padding: '0 8px',
    },
    '& div.react-datepicker__day-name': {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      color: '#616973',
      display: 'flex',
      alignItems: 'center',
      width: 43,
      margin: 0,
      justifyContent: 'center',
      textTransform: 'uppercase ',
    },
    '& .react-datepicker__month': {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
      margin: 0,
      color: '#363940',
      display: 'flex',
      flexDirection: 'column',
      '& div:first-child': {
        marginTop: 12,
      },
      '& div:last-child': {
        marginBottom: 12,
      },
      '& .react-datepicker__month-wrapper': {
        width: 280,
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0px 24px 5px 24px',
        '& div': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          width: 56,
          height: 56,
        },
        '& .react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range, .react-datepicker__quarter--selected, .react-datepicker__quarter--in-selecting-range, .react-datepicker__quarter--in-range':
          {
            background: 'rgba(0, 73, 217, 0.1)',
            border: '1px solid #0049D9',
            boxSizing: 'border-box',
            borderRadius: 8,
            color: '#363940',
          },
        '& .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected':
          {
            background: 'rgba(0, 73, 217, 0.1)',
            border: '1px solid #0049D9',
            boxSizing: 'border-box',
            borderRadius: 8,
            color: '#363940',
          },
        '& .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover':
          {
            background: 'rgba(0, 73, 217, 0.1)',
            boxSizing: 'border-box',
            borderRadius: 8,
            color: '#0049D9',
          },
      },
    },
    '& div.react-datepicker__week': {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
      margin: 0,
      color: '#616973',
      height: 40,
      padding: '0 8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range,.react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range':
      {
        background: '#216ba5 !important',
      },
    '& .react-datepicker__day': {
      background: 'rgba(0, 73, 217, 0.1)',
      border: '1px solid #0049D9',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
      margin: 0,
      color: '#363940',
      height: 40,
      width: 43,
      padding: '0 8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .react-datepicker__navigation.react-datepicker__navigation--previous': {
      top: 16,
      right: 54,
      left: 'auto',
      transform: 'rotate(270deg)',
    },
    '& .react-datepicker__navigation.react-datepicker__navigation--next': {
      top: 12,
      right: 18,
      transform: 'rotate(270deg)',
    },
    '& .react-datepicker__navigation-icon::before': {
      top: 11,
      borderColor: '#616973',
      borderWidth: '1px 1px 0 0',
    },
    '& .react-datepicker__triangle': {
      display: 'none',
    },
  },
}));

const CalendarsDateRangePicker = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dateFrom, dateTo } = useSelector(({ filters }) => filters);
  console.log(parse(dateFrom, 'yyyy-MM-dd', new Date()));
  const [startDate, endDate] = useMemo(() => {
    return [
      dateFrom ? parse(dateFrom, 'yyyy-MM-dd', new Date()) : null,
      dateTo ? parse(dateTo, 'yyyy-MM-dd', new Date()) : null,
    ];
  }, [dateFrom, dateTo]);

  const onChange = (dates) => {
    const [start, end] = dates;
    dispatch(SetDateFrom(format(getDateStartMonth(start), 'yyyy-MM-dd')));
    dispatch(SetDateTo(format(getDateEndMonth(end), 'yyyy-MM-dd')));
  };

  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <span className={classes.arrow}></span>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        locale="customRu"
        dateFormat="LLLL yyyy"
        showMonthYearPicker
        onChangeRaw={handleDateChangeRaw}
        placeholderText="Выберите фильтр календаря"
      />
    </div>
  );
};

export default CalendarsDateRangePicker;
