import React from 'react'
import { Routes as RouteList, Route } from "react-router-dom";
import ConditionalRender from '../containers/RenderCondicional/ConditionalRender';
function Routes() {
  return (
    <RouteList>
        <Route path="/conditional-render-1" element={<ConditionalRender/>} />
    </RouteList>
  )
}

export default Routes