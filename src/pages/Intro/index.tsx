import React from 'react';
import {Home} from '../Home';
import {Slider} from '../../components/Slider';
import {useProvider} from '../../provider/provider';

export function Intro() {
  const {intro} = useProvider();
  return <>{intro ? <Home /> : <Slider />}</>;
}
