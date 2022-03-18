import React, {useState} from 'react';
import {dataListObj} from '../service/data/dataList';

export function useFilterList() {
  const [list, setList] = useState<any>([]);
  const [originalData, setOriginalData] = useState<any>([]);

  function search(search: any) {
    let dataLocal: any = JSON.parse(JSON.stringify(dataListObj));
    setList(dataLocal?.filter((d: any) => d.title.includes(search)));
  }

  return {
    search,
    list,
  };
}
