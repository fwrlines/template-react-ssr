(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[8],{254:function(e,l,t){"use strict";var n=t(0),r=(t(104),t(137)),a=t(53),i=t.n(a),s="graph_q_l_tester";l.a=function(e){var l=e.id,t=e.className,a=e.style,o=Object(r.useQuery)(i()("query {\n  getSimpleHello\n}\n")),u=o.loading,_=(o.error,o.data),c=(_=void 0===_?{}:_).getSimpleHello;return n.createElement("div",{className:[s,t].filter((function(e){return e})).join(" "),id:l,style:a},n.createElement("p",null,n.createElement("strong",null,"The following paragraph should display the string received from the server. Usually something like a hello message.")),n.createElement("h2",null,u?"Loading...":c))}}}]);