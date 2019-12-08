(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),i=(a(74),a(75),a(76),a(22)),l=a(23),o=a(13),u=a(14),m=a(16),h=a(15),d=a(17),p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Exercise Tracker"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),t}(n.Component),b=a(5),E=a(33),g=a.n(E),v=(a(58),a(10)),f=a.n(v),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",description:"",duration:0,date:new Date,users:[]},a.onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};f.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(g.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:""},a.onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),f.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",description:"",duration:0,date:new Date,users:[]},a.onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/exercises/".concat(this.props.match.params.id)).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){return console.log(e)})),f.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};f.a.post("http://localhost:5000/exercises/update".concat(this.props.match.params.id),t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Edit Exercise"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(g.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise",className:"btn btn-primary"}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={exercises:[]},a.deleteExercise=a.deleteExercise.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/exercises").then((function(t){e.setState({exercises:t.data},(function(){return console.log(e.state.exercises)}))})).catch((function(e){return console.log(e)}))}},{key:"deleteExercise",value:function(e){f.a.delete("http://localhost:5000/exercises/".concat(e)).then((function(e){return console.log(e)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.state.exercises.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.duration),r.a.createElement("td",null,t.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"/edit/"+t._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(t._id)}},"delete")))})))))}}]),t}(n.Component);var O=function(){return r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement("br",null),r.a.createElement(l.a,{path:"/",exact:!0,component:j}),r.a.createElement(l.a,{path:"/edit/:id",component:N}),r.a.createElement(l.a,{path:"/create",component:C}),r.a.createElement(l.a,{path:"/user",component:D}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))},69:function(e,t,a){e.exports=a(142)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.e7e0b2b4.chunk.js.map