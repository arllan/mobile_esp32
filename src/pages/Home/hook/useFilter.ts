import React, {useState} from 'react';
import {IdataList, dataListObj} from '../../../service/data/dataList';

export function useFilterHome() {
  const [data, setData] = useState<IdataList[]>(dataListObj);
  const [input, setInput] = useState('');

  function filterData(search: string) {
    setInput(search);
    const value = dataListObj.filter((values: IdataList) =>
      values.text.includes(search),
    );

    input.length !== 0 ? setData(value) : setData(dataListObj);
  }

  return {
    data,
    filterData,
  };
}
