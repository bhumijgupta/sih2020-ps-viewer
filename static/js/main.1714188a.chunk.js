(this["webpackJsonpsih2020-problem-gui"]=this["webpackJsonpsih2020-problem-gui"]||[]).push([[0],{19:function(e,t,a){e.exports=a(50)},28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),c=(a(24),a(25),a(28),a(6)),i=a.n(c),l=a(17),m=a(2),u=a(3),d=a(4),h=a(5),p=(a(30),a(31),["miscellaneous","clean water","smart communication","sustainable environment","robotics & drones","security & surveillance","agriculture and rural development","smart cities","healthcare & biomedical devices","smart vehicles","energy / renewable energy","food technology","waste management","smart education","travel and tourism","smart textiles","sports and fitness","software - web app development"]),v=["smart communication","healthcare & biomedical devices","miscellaneous","smart vehicles","software - web app development","energy / renewable energy","agriculture and rural development","robotics & drones","software - mobile app development","waste management","security & surveillance","finance","smart cities","travel and tourism","smart education","sustainable environment","food technology","smart textiles","sports and fitness"],b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={category:"",technology:"",disabledTech:!0,disabledBtn:!0},e.getTechnologyList=function(){return""===e.state.category?[]:"software"===e.state.category?v.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})):p.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.onFormSubmit({category:e.state.category,technology:e.state.technology})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4"},r.a.createElement("select",{value:this.state.category,className:"form-control",id:"category",onChange:function(t){e.setState({category:t.target.value,disabledTech:!1})}},r.a.createElement("option",{disabled:!0,value:""},"Select a category"),r.a.createElement("option",{value:"software"},"Software"),r.a.createElement("option",{value:"hardware"},"Hardware"))),r.a.createElement("div",{className:"col-md-6 col-sm-8"},r.a.createElement("select",{value:this.state.technology,className:"form-control",id:"technology",onChange:function(t){e.setState({technology:t.target.value,disabledBtn:!1})},disabled:this.state.disabledTech},r.a.createElement("option",{disabled:!0,value:""},"Select a technology"),this.getTechnologyList())),r.a.createElement("div",{className:"col-md-2 col-sm-12"},r.a.createElement("button",{className:"btn btn-light w-100",disabled:this.state.disabledBtn||this.props.disableForm},this.props.disableForm?"Loading...":"Submit"))))}}]),a}(n.Component),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center display-5"},"SIH 2020 Problem Statement Viewer"),r.a.createElement("p",{className:"lead text-center"},"A user friendly interface to view SIH 2020 problem statements")),r.a.createElement(b,{onFormSubmit:this.props.onFormSubmit,disableForm:this.props.disableForm}))}}]),a}(n.Component),g=a(18),f=a.n(g).a.create({baseURL:"https://sih2020ps.herokuapp.com/api"}),E=(a(49),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hover:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.idea,a=t.title,n=t.description;return r.a.createElement("div",{className:this.state.hover?"card highlight":"card",onMouseEnter:function(){e.setState({hover:!0})},onMouseLeave:function(){e.setState({hover:!1})}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text text-muted"},n)))}}]),a}(n.Component)),w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidUpdate=function(){n.props.ideas.length>0&&n.scrollToDiv()},n.scrollToDiv=function(){n.divToFocus.current&&(console.log("object"),n.divToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"}))},n.generateAllCards=function(){return n.props.ideas.map((function(e){return r.a.createElement(E,{idea:e,key:e._id})}))},n.divToFocus=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){return this.props.showLoader?r.a.createElement(w,null):0===this.props.ideas.length?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},this.props.category.toUpperCase()," -"," ",this.props.technology.toUpperCase()),r.a.createElement("div",{className:"card-columns",ref:this.divToFocus,style:{paddingTop:"20px"}},this.generateAllCards()))}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ideas:[],showLoader:!1,category:"",technology:""},e.onFormSubmit=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.category,r=a.technology,e.setState({ideas:[],showLoader:!0,category:n,technology:r}),t.next=4,f.post("/",{category:n,technology:r});case 4:o=t.sent,e.setState({ideas:o.data.body,showLoader:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{onFormSubmit:this.onFormSubmit,disableForm:this.state.showLoader}),r.a.createElement("div",{className:"container IdeaListContainer"},r.a.createElement(j,{category:this.state.category,technology:this.state.technology,ideas:this.state.ideas,showLoader:this.state.showLoader})))}}]),a}(n.Component);s.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1714188a.chunk.js.map