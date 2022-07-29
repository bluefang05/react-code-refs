import React from 'react'
import { Routes as RouteList, Route } from "react-router-dom";
import ConditionalRender1 from '../containers/Conditional/1/ConditionalRender';
import ConditionalDisable1 from '../containers/Conditional/2/ConditionalDisable1';
import ConditionalDisable1_2 from '../containers/Conditional/2-2/ConditionalDisable1_2';
function Routes() {
  return (
    <RouteList>
        <Route path="/conditional-render-1" element={<ConditionalRender1/>} />
        <Route path="/conditional-disable-1" element={<ConditionalDisable1/>} />
        <Route path="/conditional-disable-1-2" element={<ConditionalDisable1_2/>} />
    </RouteList>
  )
}

export default Routes