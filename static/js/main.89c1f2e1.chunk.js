(this["webpackJsonpreact-characters-admin"]=this["webpackJsonpreact-characters-admin"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),u=a(9),i=a(1),m=a(2),o=a(4),h=a(3),s=a(5),b=(a(15),function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u540d\u524d"),r.a.createElement("th",null,"\u30c1\u30fc\u30e0"),r.a.createElement("th",null,"\u524a\u9664")))}),E=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.team),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(E,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),p=a(8),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",team:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.team;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"\u540d\u524d"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"\u30c1\u30fc\u30e0"),r.a.createElement("input",{type:"text",name:"team",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"\u767b\u9332"))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(u.a)(a.state.characters),[e])})},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter((function(t,a){return a!==e}))})},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React Characters Admin"),r.a.createElement("p",null,"\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u3092\u7ba1\u7406\u3059\u308bReact\u30a2\u30d7\u30ea"),r.a.createElement(f,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(v,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.89c1f2e1.chunk.js.map