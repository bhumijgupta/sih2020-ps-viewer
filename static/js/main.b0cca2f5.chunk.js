(this["webpackJsonpsih2020-problem-gui"]=this["webpackJsonpsih2020-problem-gui"]||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(24),a(25),a(6)),l=a.n(s),i=a(17),m=a(2),u=a(3),d=a(4),p=a(5),b=(a(29),a(30),["miscellaneous","clean water","smart communication","sustainable environment","robotics & drones","security & surveillance","agriculture and rural development","smart cities","healthcare & biomedical devices","smart vehicles","energy / renewable energy","food technology","waste management","smart education","travel and tourism","smart textiles","sports and fitness","software - web app development"]),v=["smart communication","healthcare & biomedical devices","miscellaneous","smart vehicles","software - web app development","energy / renewable energy","agriculture and rural development","robotics & drones","software - mobile app development","waste management","security & surveillance","finance","smart cities","travel and tourism","smart education","sustainable environment","food technology","smart textiles","sports and fitness"],h=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={category:"",technology:"",disabled:!0},e.getTechnologyList=function(){return""===e.state.category?[]:"software"===e.state.category?v.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})):b.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onFormSubmit({category:e.state.category,technology:e.state.technology})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4"},r.a.createElement("select",{value:this.state.category,className:"form-control",id:"category",onChange:function(t){e.setState({category:t.target.value,disabled:!1})}},r.a.createElement("option",{disabled:!0,value:""},"Select a category"),r.a.createElement("option",{value:"software"},"Software"),r.a.createElement("option",{value:"hardware"},"Hardware"))),r.a.createElement("div",{className:"col-md-6 col-sm-8"},r.a.createElement("select",{value:this.state.technology,className:"form-control",id:"technology",onChange:function(t){e.setState({technology:t.target.value})},disabled:this.state.disabled},r.a.createElement("option",{disabled:!0,value:""},"Select a technology"),this.getTechnologyList())),r.a.createElement("div",{className:"col-md-2 col-sm-12"},r.a.createElement("button",{className:"btn btn-light w-100",disabled:this.state.disabled},"Submit"))))}}]),a}(n.Component),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center display-5"},"SIH 2020 Problem Statement Viewer"),r.a.createElement("p",{className:"lead text-center"},"A user freindly interface to view SIH 2020 problem statements")),r.a.createElement(h,{onFormSubmit:this.props.onFormSubmit}))}}]),a}(n.Component),y=a(18),g=a.n(y).a.create({baseURL:"http://sih2020ps.herokuapp.com/api"}),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.idea,t=e.title,a=e.description;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text text-muted"},a)))}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).generateAllCards=function(){return e.props.ideas.map((function(e){return r.a.createElement(E,{idea:e,key:e._id})}))},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.ideas===[]?r.a.createElement("div",null):r.a.createElement("div",{className:"card-columns"},this.generateAllCards())}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ideas:[]},e.onFormSubmit=function(){var t=Object(i.a)(l.a.mark((function t(a){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.category,r=a.technology,t.next=3,g.post("/",{category:n,technology:r});case 3:c=t.sent,e.setState({ideas:c.data.body});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{onFormSubmit:this.onFormSubmit}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{ideas:this.state.ideas})))}}]),a}(n.Component);o.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b0cca2f5.chunk.js.map