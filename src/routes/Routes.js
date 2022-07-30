import React from 'react'
import { Routes as RouteList, Route } from "react-router-dom";
import ConditionalRender1 from '../containers/Conditional/1/ConditionalRender';
import ConditionalDisable1 from '../containers/Conditional/2/ConditionalDisable1';
import CONDITIONAL_DISABLE_1_2 from '../containers/Conditional/2-2/ConditionalDisable1_2';
import NumbersApi from '../containers/ApiRequest/1/numbersApi';
import PokeApi from '../containers/ApiRequest/2/PokeApiCard';

function Routes() {
  return (
    <RouteList>
        <Route path="/conditional-render-1" element={<ConditionalRender1/>} />
        <Route path="/conditional-disable-1" element={<ConditionalDisable1/>} />
        <Route path="/conditional-disable-1-2" element={<CONDITIONAL_DISABLE_1_2/>} />
        <Route path="/api-request-1" element={<NumbersApi/>} />
        <Route path="/api-request-2" element={<PokeApi/>} />
    </RouteList>
  )
}

export default Routes