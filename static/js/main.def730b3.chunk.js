(this["webpackJsonpvistapath-case-analyzer"]=this["webpackJsonpvistapath-case-analyzer"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),i=n(20),r=n.n(i),o=(n(37),n(4)),l=n(5),u=n(8),d=n(7),p=(n(38),n(10)),j=n(6),h=n(9),b=n(18),m=n(22),f=(n(43),"AUTHENTICATE"),g="LOGOUT",O="INIT_LOGIN_CHECK",v="https://caseanalysisserver.karanthakor.repl.co",x=function(e){return function(t){return function(e){var t=new Headers;return t.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(v,"/users"),{method:"POST",headers:t,body:JSON.stringify(e)})}(e).then((function(e){return e.json()})).then((function(e){})).catch((function(){}))}},I=function(e){return function(t){return function(e){var t=new Headers;return t.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(v,"/users/auth"),{method:"POST",headers:t,body:JSON.stringify(e)})}(e).then((function(e){return e.json()})).then((function(e){t({type:f,payload:e})})).catch((function(){}))}},y="home-bg-image",N={username:"",password:"",signup_username:"",signup_name:"",signup_password:"",signup_password2:"",viewType:"login"},C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).validateUser=function(){s.props.authenticateUser({username:s.state.username,password:s.state.password})},s.signupUser=function(){s.props.createUserAccount({username:s.state.signup_username,name:s.state.signup_name,password:s.state.signup_password2}),s.setState({INIT_STATE:N})},s.state=N,s.handleInputChange=s.handleInputChange.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.name;this.setState(Object(b.a)({},n,t.value))}},{key:"toggleSignInScreen",value:function(){"login"!==this.state.viewType?this.setState({viewType:"login"}):this.setState({viewType:"signup"})}},{key:"renderRedirect",value:function(){if(this.props.userInfo)return Object(s.jsx)(h.a,{to:"/"})}},{key:"componentDidMount",value:function(){document.body.classList.add(y)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove(y)}},{key:"render",value:function(){var e,t=this;return e="login"===this.state.viewType?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",name:"username",className:"form-control",value:this.state.username,onChange:this.handleInputChange,placeholder:"Enter Username"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.handleInputChange,placeholder:"Enter Password"})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("p",{className:"text-center",children:"By signing up you accept our Terms Of Use"})}),Object(s.jsx)("div",{className:"col-md-12 text-center ",children:Object(s.jsx)("button",{type:"submit",onClick:function(){return t.validateUser()},disabled:this.state.username.trim().length<3||this.state.password.trim().length<5,className:" btn btn-block mybtn btn-primary tx-tfm",children:"Login"})})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username"}),Object(s.jsx)("input",{type:"text",name:"signup_username",className:"form-control",value:this.state.signup_username,onChange:this.handleInputChange,placeholder:"Enter Username"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Name"}),Object(s.jsx)("input",{type:"text",name:"signup_name",className:"form-control",value:this.state.signup_name,onChange:this.handleInputChange,placeholder:"Enter Name"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Enter Password"}),Object(s.jsx)("input",{type:"password",name:"signup_password",className:"form-control",value:this.state.signup_password,onChange:this.handleInputChange,placeholder:"Enter Password"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Re-enter Password"}),Object(s.jsx)("input",{type:"password",name:"signup_password2",className:"form-control",value:this.state.signup_password2,onChange:this.handleInputChange,placeholder:"Enter Password"})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("p",{className:"text-center",children:"By signing up you accept our Terms Of Use"})}),Object(s.jsx)("div",{className:"col-md-12 text-center ",children:Object(s.jsx)("button",{type:"submit",onClick:function(){return t.signupUser()},disabled:this.state.signup_username.trim().length<3||this.state.signup_name.trim().length<3||this.state.signup_password.trim().length<5||this.state.signup_password2.trim().length<5||this.state.signup_password!==this.state.signup_password2,className:" btn btn-block mybtn btn-primary tx-tfm",children:"Sign Up"})})]}),Object(s.jsxs)("div",{className:"container",children:[this.renderRedirect(),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-5 mx-auto",children:Object(s.jsxs)("div",{className:"myform form ",children:[Object(s.jsx)("div",{className:"logo mb-3",children:Object(s.jsx)("div",{className:"col-md-12 text-center",children:Object(s.jsx)("h2",{className:"darkslategrey",children:"Welcome to vPethology Analytics Platform"})})}),e,Object(s.jsx)("div",{className:"col-md-12 ",children:Object(s.jsx)("div",{className:"login-or",children:Object(s.jsx)("span",{className:"span-or",children:"or"})})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("p",{className:"text-center",children:["Don't have account?","login"===this.state.viewType?Object(s.jsx)("span",{className:"sign-in-link",onClick:function(){return t.toggleSignInScreen()},children:"Sign up here"}):Object(s.jsx)("span",{className:"sign-in-link",onClick:function(){return t.toggleSignInScreen()},children:"Go back to login"})]})})]})})})]})}}]),n}(c.a.Component),w=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{authenticateUser:function(t){return e(I(t))},createUserAccount:function(t){return e(x(t))}}}))(C),S=(n(45),n(46),"SET_ALL_CASES"),k="NEW_CASE_CREATED",A="CASE_EDIT_INITIATED",_="CASE_EDIT_DISCARDED",T="CLEAR_CASE_UPDATE_NOTIFICATION",E="SET_ALL_PENDING_CASES",U="https://caseanalysisserver.karanthakor.repl.co",D=function(e){return function(t){return function(e){return fetch("".concat(U,"/patient-analysis/all/").concat(e))}(e).then((function(e){return e.json()})).then((function(e){t(L(e))})).catch((function(){}))}},P=function(e,t){return function(n){return function(e,t){return fetch("".concat(U,"/patient-analysis/filter/").concat(e,"?statusId=").concat(t.statusId))}(e,t).then((function(e){return e.json()})).then((function(e){n(L(e))})).catch((function(){}))}},L=function(e){return{type:S,payload:e}},F=function(e){var t=e.userId,n=e.data;return function(e){return function(e,t){var n=new Headers;return n.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(U,"/patient-analysis/").concat(e,"/submit"),{method:"POST",headers:n,body:JSON.stringify(t)})}(t,n).then((function(e){return e.json()})).then((function(t){e(R("New case created successfully..."))})).catch((function(){}))}},V=function(e){var t=e.userId,n=e.caseId,s=e.data;return function(e){return function(e,t,n){var s=new Headers;return s.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(U,"/patient-analysis/").concat(e,"/").concat(t),{method:"PUT",headers:s,body:JSON.stringify(n)})}(t,n,s).then((function(e){return e.json()})).then((function(t){e(R("Case edited successfully..."))})).catch((function(){}))}},R=function(e){return{type:k,payload:e}},z=function(e){return function(t){return function(e){return fetch("".concat(U,"/patient-analysis/admin/all/").concat(e))}(e).then((function(e){return e.json()})).then((function(e){t(L(e))})).catch((function(){}))}},W=function(e){return function(t){return function(e){return fetch("".concat(U,"/admin/patient-analysis/").concat(e))}(e).then((function(e){return e.json()})).then((function(e){t(J(e))})).catch((function(){}))}},J=function(e){return{type:E,payload:e}},M=function(e,t,n){return function(s){return function(e,t,n){var s=new Headers;return s.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(U,"/admin/patient-analysis/").concat(e,"/").concat(t,"/status"),{method:"PUT",headers:s,body:JSON.stringify(n)})}(e,t,n).then((function(e){return e.json()})).then((function(t){s(W(e))})).catch((function(){}))}},B=function(e,t){return function(n){return function(e,t){var n=new Headers;return n.append("Content-Type","application/json;charset=UTF-8"),fetch("".concat(U,"/admin/all/patient-analysis/").concat(e,"/status"),{method:"PUT",headers:n,body:JSON.stringify(t)})}(e,t).then((function(e){return e.json()})).then((function(t){n(W(e))})).catch((function(){}))}},H=(n(47),n(48),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggleDetailView=function(){var e=!s.state.isDetailViewOpen;s.setState({isDetailViewOpen:e})},s.EditSelectedCase=function(e){s.props.caseInfo.statusId>-1||(e.stopPropagation(),s.props.caseInfo&&s.props.caseInfo._id&&-1===s.props.caseInfo.statusId&&(s.props.editSelectedCase(s.props.caseInfo._id),s.setState({caseEditInitiated:!0})))},s.state={isDetailViewOpen:!1,caseEditInitiated:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.caseEditInitiated?Object(s.jsx)(h.a,{to:"/case-wizard"}):Object(s.jsxs)("tr",{onClick:function(){return e.toggleDetailView()},className:"case-detail-raw",children:[Object(s.jsxs)("th",{scope:"row",children:[Object(s.jsx)("i",{className:"fa fa-edit "+(this.props.caseInfo.statusId>-1?"gray":""),role:"button",onClick:function(t){return e.EditSelectedCase(t)}}),Object(s.jsx)("span",{className:"case-view-icon",children:this.state.isDetailViewOpen?Object(s.jsx)("i",{className:"fa fa-caret-down"}):Object(s.jsx)("i",{className:"fa fa-caret-right"})})]}),Object(s.jsxs)("td",{children:[this.props.caseInfo.casename,this.state.isDetailViewOpen&&Object(s.jsx)("div",{className:"card-group case-detail-images",children:this.props.caseInfo.images.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("img",{className:"card-img-top",src:e.url,alt:""})})},t)}))})]}),Object(s.jsxs)("td",{children:[this.props.caseInfo.description,Object(s.jsx)("div",{children:"images"})]}),Object(s.jsx)("td",{children:this.props.caseInfo.status}),Object(s.jsx)("td",{children:this.props.caseInfo.imageNotes})]},this.props.index)}}]),n}(c.a.Component)),G=Object(j.b)((function(e){return{}}),(function(e){return{editSelectedCase:function(t){return e({type:A,payload:t})}}}))(H),q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterCasesByStatus=function(t){e.props.userInfo&&e.props.userInfo._id&&("All"===t.target.value?e.props.getAllCases(e.props.userInfo._id):e.props.getAllCasesByFilter(e.props.userInfo._id,{statusId:t.target.value}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n=this;return t=(null===(e=this.props)||void 0===e?void 0:e.caseList.length)>0?Object(s.jsx)("tbody",{children:this.props.caseList.map((function(e,t){return Object(s.jsx)(G,{caseInfo:e},t)}))}):Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:"No case records to display."})]})}),Object(s.jsx)("div",{className:"case-list-div",children:Object(s.jsxs)("table",{className:"table case-table table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",className:"w-25",children:"Case Name"}),Object(s.jsx)("th",{scope:"col",children:"Description"}),Object(s.jsxs)("th",{scope:"col",children:["Case Status",Object(s.jsx)("div",{className:"filterDiv",children:Object(s.jsxs)("select",{className:"custom-select",onChange:function(e){return n.filterCasesByStatus(e)},id:"inlineFormCustomSelect",children:[Object(s.jsx)("option",{value:"All",defaultValue:!0,children:"All"}),Object(s.jsx)("option",{value:"1",children:"Approved"}),Object(s.jsx)("option",{value:"-1",children:"Rejected"}),Object(s.jsx)("option",{value:"0",children:"Pending"})]})})]}),Object(s.jsx)("th",{scope:"col",children:"Image Information"})]})}),t]})})}}]),n}(c.a.Component),K=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{getAllCases:function(t){return e(D(t))},getAllCasesByFilter:function(t,n){return e(P(t,n))}}}))(q),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).fetchAllCases=function(){e.props.userInfo&&e.props.userInfo._id&&("admin"===e.props.userInfo.role?e.props.getAllCasesForAdmin(e.props.userInfo._id):e.props.getAllCases(e.props.userInfo._id))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchAllCases()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"case-analysis-div",children:[Object(s.jsx)("h3",{className:"darkslategrey",children:"Welcome to case management console"}),Object(s.jsx)(p.b,{to:"/case-wizard",children:Object(s.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-md",children:"Create a new case"})}),Object(s.jsx)(K,{caseList:this.props.caseList})]})}}]),n}(c.a.Component),X=Object(j.b)((function(e){return{userInfo:e.user.userInfo,caseList:e.caseAnalysisConsole.caseListView.caseList}}),(function(e){return{getAllCases:function(t){return e(D(t))},getAllCasesForAdmin:function(t){return e(z(t))}}}))(Q),Y=n(3),Z=n(16),$=(n(49),n(50),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.images.map((function(t,n){return Object(s.jsx)("div",{className:"col-sm-4",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body image-card",children:[Object(s.jsx)("img",{className:"card-img-top",src:t.url,alt:""}),Object(s.jsxs)("div",{className:"input-group input-group-sm mb-1",children:[Object(s.jsx)("input",{type:"text",className:"form-control",value:t.tagInputVal,onChange:function(t){return e.props.onImageTagInputChange(t,n)},placeholder:"Image Tags","aria-label":"Image Tag","aria-describedby":"basic-addon2"}),Object(s.jsx)("div",{className:"input-group-append",children:Object(s.jsx)("button",{className:"btn btn-outline-secondary fa fa-plus",disabled:0===t.tagInputVal.trim().length,onClick:function(){return e.props.addTagtoImage(n,t.tagInputVal)},type:"button"})})]}),Object(s.jsx)("div",{className:"img-labels-section",children:t.tags.map((function(e,t){return Object(s.jsxs)("span",{className:"image-label",children:[e," ",Object(s.jsx)("i",{className:"fa fa-times-circle"})]},t)}))}),Object(s.jsx)("div",{className:"remove-image-btn",children:Object(s.jsx)("button",{className:"btn btn-sm btn-outline-danger",type:"button",children:"Remove"})})]})})},n)}));return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"custom-file col-md-4 image-upload-btn",children:[Object(s.jsx)("input",{type:"file",className:"custom-file-input",accept:"image/png, image/jpeg",onChange:function(t){return e.props.onImagesUpload(t)},multiple:!0}),Object(s.jsx)("label",{className:"custom-file-label",htmlFor:"inputGroupFile01",children:"Upload Images"})]}),Object(s.jsx)("div",{className:"row uploaded-imgs",children:t})]})}}]),n}(c.a.Component)),ee={caseId:"",casename:"",description:"",images:[],imageNotes:""},te=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onFormInputChange=function(e){s.setState(Object(b.a)({},e.target.name,e.target.value))},s.onImagesUpload=function(e){var t=Array.from(e.target.files),n=new FormData;t.forEach((function(e,t){n.append(t,e)})),fetch("".concat("https://caseanalysisserver.karanthakor.repl.co","/image-upload"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){e.map((function(e){return e.tagInputVal=""}));var t=s.state.images;t=[].concat(Object(Z.a)(t),Object(Z.a)(e)),s.setState({images:t})}))},s.onImageTagInputChange=function(e,t){var n=Object(Z.a)(s.state.images);s.setState({images:[].concat(Object(Z.a)(n.slice(0,t)),[Object(Y.a)(Object(Y.a)({},n[t]),{},{tagInputVal:e.target.value})],Object(Z.a)(n.slice(t+1)))})},s.addTagtoImage=function(e,t){var n=Object(Z.a)(s.state.images),a=Object(Y.a)({},n[e]);a.tags.push(t),a.tagInputVal="",s.setState({images:[].concat(Object(Z.a)(n.slice(0,e)),[a],Object(Z.a)(n.slice(e+1)))})},s.onNewCaseFormSubmit=function(){s.validateUserInput()&&(s.props.caseEditId?(s.props.editCase({userId:s.props.userInfo._id,caseId:s.state.caseId,data:s.state}),s.props.caseEditDiscarded()):s.props.createNewCase({userId:s.props.userInfo._id,data:s.state})),s.resetCaseForm()},s.resetCaseForm=function(){s.setState(ee),s.props.clearCaseUpdateNotification()},s.onCancelFormEdit=function(){s.props.caseEditId&&s.props.caseEditDiscarded(),s.resetCaseForm()},s.validateUserInput=function(){return s.state.casename.trim().length>2&&s.state.description.trim().length>2&&s.state.images.length>0},s.state=ee,s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.userInfo&&this.props.userInfo._id&&this.props.caseEditId&&this.initEditCaseMode(this.props.userInfo._id,this.props.caseEditId)}},{key:"initEditCaseMode",value:function(e,t){var n=this;(function(e,t){return fetch("".concat(U,"/patient-analysis/").concat(e,"/").concat(t))})(e,t).then((function(e){return e.json()})).then((function(e){var t=e.casename,s=e.description,a=e.imageNotes,c=e.images,i=e._id;n.setState({caseId:i,casename:t,description:s,images:c,imageNotes:a})}))}},{key:"componentWillUnmount",value:function(){this.props.caseEditId&&(this.props.caseEditDiscarded(),this.props.clearCaseUpdateNotification())}},{key:"render",value:function(){var e=this,t=this.validateUserInput();return Object(s.jsxs)("div",{className:"case-wizard-div",children:[Object(s.jsx)("h3",{className:"darkslategrey",children:"Welcome to case creation wizard"}),this.props.caseEditId&&Object(s.jsx)("h5",{className:"darkgoldenrod",children:"Case Edit Mode:"}),Object(s.jsx)("p",{children:"Please fill out all the information required to submit a case."}),Object(s.jsxs)("div",{className:"border",children:[Object(s.jsxs)("div",{className:"case-wizard-elements",children:[Object(s.jsx)("div",{className:"input-group mb-2 col-md-6",children:Object(s.jsx)("input",{type:"text",className:"form-control",name:"casename",value:this.state.casename,onChange:function(t){return e.onFormInputChange(t)},placeholder:"Case Name","aria-label":"casename","aria-describedby":"basic-addon1"})}),Object(s.jsx)("div",{className:"input-group mb-2 col-md-6",children:Object(s.jsx)("textarea",{type:"text",className:"form-control",name:"description",value:this.state.description,onChange:function(t){return e.onFormInputChange(t)},placeholder:"Case Description","aria-label":"description","aria-describedby":"basic-addon1"})}),Object(s.jsx)("div",{className:"col-md-12 mb-1",children:Object(s.jsx)($,{images:this.state.images,onImagesUpload:this.onImagesUpload,onImageTagInputChange:this.onImageTagInputChange,addTagtoImage:this.addTagtoImage})}),Object(s.jsx)("div",{className:"input-group mb-2 col-md-6",children:Object(s.jsx)("input",{type:"text",className:"form-control",name:"imageNotes",value:this.state.imageNotes,onChange:function(t){return e.onFormInputChange(t)},placeholder:"General notes about images","aria-label":"imagenotes","aria-describedby":"basic-addon1"})}),this.props.status&&Object(s.jsx)("p",{className:"darkgreen",children:this.props.status})]}),Object(s.jsxs)("div",{className:"wizard-controls-group",children:[Object(s.jsx)("button",{type:"button",disabled:!t,onClick:function(){return e.onNewCaseFormSubmit()},className:"btn btn-primary",children:"Submit"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e.onCancelFormEdit()},className:"btn btn-outline-primary",children:"Cancel"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e.resetCaseForm()},className:"btn btn-outline-danger "+(this.props.caseEditId?"hidden":""),children:"Reset"})]})]})]})}}]),n}(c.a.Component),ne=Object(j.b)((function(e){return{userInfo:e.user.userInfo,status:e.caseAnalysisConsole.caseWizard.status,caseEditId:e.caseAnalysisConsole.caseWizard.caseEditInProgressId}}),(function(e){return{createNewCase:function(t){return e(F(t))},clearCaseUpdateNotification:function(){return e({type:T})},editCase:function(t){return e(V(t))},caseEditDiscarded:function(){return e({type:_})}}}))(te),se=(n(51),n(52),n(53),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).toggleDetailView=function(){var e=!s.state.isDetailViewOpen;s.setState({isDetailViewOpen:e})},s.changeCaseStatus=function(e,t){e.stopPropagation(),s.props.userInfo&&"admin"===s.props.userInfo.role&&s.props.changePendingCaseStatus(s.props.userInfo._id,s.props.caseInfo._id,{statusId:t})},s.state={isDetailViewOpen:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("tr",{onClick:function(){return e.toggleDetailView()},className:"case-detail-raw",children:[Object(s.jsxs)("th",{scope:"row",children:[this.state.isDetailViewOpen?Object(s.jsx)("i",{className:"fa fa-caret-down"}):Object(s.jsx)("i",{className:"fa fa-caret-right"}),Object(s.jsx)("span",{className:"case-view-icon",children:Object(s.jsxs)("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"...",children:[Object(s.jsx)("button",{type:"button",onClick:function(t){return e.changeCaseStatus(t,1)},className:"btn btn-outline-primary",children:"Approve"}),Object(s.jsx)("button",{type:"button",onClick:function(t){return e.changeCaseStatus(t,-1)},className:"btn btn-outline-danger",children:"Reject"})]})})]}),Object(s.jsxs)("td",{children:[this.props.caseInfo.casename,this.state.isDetailViewOpen&&Object(s.jsx)("div",{className:"card-group case-detail-images",children:this.props.caseInfo.images.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("img",{className:"card-img-top",src:e.url,alt:""})})},t)}))})]}),Object(s.jsxs)("td",{children:[this.props.caseInfo.description,Object(s.jsx)("div",{children:"images"})]}),Object(s.jsx)("td",{children:this.props.caseInfo.imageNotes})]},this.props.index)}}]),n}(c.a.Component)),ae=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{changePendingCaseStatus:function(t,n,s){return e(M(t,n,s))}}}))(se),ce=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).changeAllCaseStatus=function(t){e.props.userInfo&&"admin"===e.props.userInfo.role&&e.props.changeAllPendingCaseStatus(e.props.userInfo._id,{statusId:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n=this;return t=(null===(e=this.props)||void 0===e?void 0:e.caseList.length)>0?Object(s.jsxs)("table",{className:"table case-table table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:Object(s.jsxs)("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"...",children:[Object(s.jsx)("button",{type:"button",onClick:function(){return n.changeAllCaseStatus(1)},className:"btn btn-outline-primary",children:"Approve All"}),Object(s.jsx)("button",{type:"button",onClick:function(){return n.changeAllCaseStatus(-1)},className:"btn btn-outline-danger",children:"Reject All"})]})}),Object(s.jsx)("th",{scope:"col",className:"w-25",children:"Case Name"}),Object(s.jsx)("th",{scope:"col",children:"Description"}),Object(s.jsx)("th",{scope:"col",children:"Image Information"})]})}),Object(s.jsx)("tbody",{children:this.props.caseList.map((function(e,t){return Object(s.jsx)(ae,{caseInfo:e},t)}))})]}):Object(s.jsx)("p",{children:"No case records to display."}),Object(s.jsx)("div",{className:"case-list-div",children:t})}}]),n}(c.a.Component),ie=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{changeAllPendingCaseStatus:function(t,n){return e(B(t,n))}}}))(ce),re=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.userInfo&&"admin"===this.props.userInfo.role&&this.props.getAllPendingCases(this.props.userInfo._id)}},{key:"renderRedirect",value:function(){if(this.props.userInfo&&"admin"!==this.props.userInfo.role)return Object(s.jsx)(h.a,{to:"/"})}},{key:"render",value:function(){return this.renderRedirect(),Object(s.jsxs)("div",{className:"case-analysis-div",children:[Object(s.jsx)("h3",{className:"darkslategrey",children:"Welcome to Admin console"}),Object(s.jsx)(ie,{caseList:this.props.casePendingList})]})}}]),n}(c.a.Component),oe=Object(j.b)((function(e){return{userInfo:e.user.userInfo,casePendingList:e.caseAnalysisConsole.admin.casePendingList}}),(function(e){return{getAllPendingCases:function(t){return e(W(t))}}}))(re),le=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n;return Object(s.jsx)(p.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2 bg-dark position-fixed",id:"sticky-sidebar",children:Object(s.jsx)("div",{className:"nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2",children:Object(s.jsxs)("ul",{className:"navbar-nav list-inline mx-auto justify-content-center",children:[Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/karanthakor/image/upload/c_scale,w_73/v1606984283/icon_s318jf.png",alt:"Avatar",className:"image"})}),Object(s.jsxs)("li",{className:"nav-item active",children:[Object(s.jsx)("i",{className:"fa fa-user user-icon"})," ",null===(e=this.props.userInfo)||void 0===e?void 0:e.name]}),Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)(p.b,{to:"/",className:"nav-link list-inline-item ",children:"Dashboard"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(p.b,{to:"/case-wizard",className:"nav-link list-inline-item",children:"Case Wizard"})}),"admin"===(null===(t=this.props.userInfo)||void 0===t?void 0:t.role)&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(p.b,{to:"/admin",className:"nav-link list-inline-item",children:"Admin Console"})}),Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)("p",{onClick:this.props.logoutUser,className:"nav-link list-inline-item logout-btn",children:"Logout"})})]})})}),Object(s.jsx)("div",{className:"col-10 offset-2",id:"main",children:Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",component:X}),Object(s.jsx)(h.b,{exact:!0,path:"/case-wizard",component:ne}),"admin"===(null===(n=this.props.userInfo)||void 0===n?void 0:n.role)&&Object(s.jsx)(h.b,{exact:!0,path:"/admin",component:oe})]})})]})})})})}}]),n}(c.a.Component),ue=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{logoutUser:function(){return e({type:g})}}}))(le),de=function(){return Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/login",component:w}),Object(s.jsx)(h.b,{path:"/",component:ue})]})},pe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"isUserAuthIn",value:function(){if(!this.props.userInfo)return Object(s.jsx)(h.a,{to:"/login"})}},{key:"componentDidMount",value:function(){this.props.userInfo||this.props.isUserLoggedIn()}},{key:"render",value:function(){return Object(s.jsx)(p.a,{children:Object(s.jsxs)("div",{className:"App",children:[this.isUserAuthIn(),Object(s.jsx)(de,{})]})})}}]),n}(c.a.Component),je=Object(j.b)((function(e){return{userInfo:e.user.userInfo}}),(function(e){return{isUserLoggedIn:function(){return e({type:O})}}}))(pe),he=n(15),be=n(30),me=n(31),fe={userInfo:null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=null;return localStorage.getItem("vistapath_user")&&(n=JSON.parse(localStorage.getItem("vistapath_user"))),Object(Y.a)(Object(Y.a)({},e),{},{userInfo:n});case f:return localStorage.setItem("vistapath_user",JSON.stringify(t.payload)),Object(Y.a)(Object(Y.a)({},e),{},{userInfo:t.payload});case g:return localStorage.removeItem("vistapath_user"),Object(Y.a)(Object(Y.a)({},e),{},{userInfo:null});default:return e}},Oe={caseList:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Y.a)(Object(Y.a)({},e),{},{caseList:t.payload});default:return e}},xe={caseEditInProgressId:"",caseCreatedNotification:"",status:""},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Y.a)(Object(Y.a)({},e),{},{status:t.payload});case A:return Object(Y.a)(Object(Y.a)({},e),{},{caseEditInProgressId:t.payload});case _:return Object(Y.a)(Object(Y.a)({},e),{},{caseEditInProgressId:""});case T:return Object(Y.a)(Object(Y.a)({},e),{},{status:t.payload});default:return e}},ye={casePendingList:[]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(Y.a)(Object(Y.a)({},e),{},{casePendingList:t.payload});default:return e}},Ce=Object(he.combineReducers)({caseWizard:Ie,caseListView:ve,admin:Ne}),we=Object(he.combineReducers)({user:ge,caseAnalysisConsole:Ce}),Se=[Object(he.applyMiddleware)(be.a),Object(me.composeWithDevTools)()],ke=Object(he.createStore)(we,he.compose.apply(void 0,Se)),Ae=(n(54),n(55),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))});r.a.render(Object(s.jsx)(j.a,{store:ke,children:Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(je,{})})}),document.getElementById("root")),Ae()}},[[56,1,2]]]);
//# sourceMappingURL=main.def730b3.chunk.js.map