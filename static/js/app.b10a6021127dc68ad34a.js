webpackJsonp([1],{"8MvV":function(t,i){},DuE7:function(t,i){},GoOT:function(t,i){},NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("/5sW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"app-world"},[i("div",{staticClass:"world-background-bg"}),this._v(" "),i("div",{staticClass:"world-background-far-trees"}),this._v(" "),i("div",{staticClass:"world-background-mid-trees"}),this._v(" "),i("div",{staticClass:"world-background-close-trees"})])}]};var s=n("VU/8")({name:"world"},r,!1,function(t){n("DuE7")},"data-v-825546d2",null).exports,a=n("Xxa5"),o=n.n(a),c=n("exGp"),u=n.n(c),h=n("fZjL"),m=n.n(h),w=n("//Fk"),d=n.n(w),l=1e3/15,p={name:"warrior",props:["windowWidth","actions","AABB","currentTurn","wasHit","isDead","resetGame"],data:function(){return{collided:!1,warrior:{stats:{attackDamage:10},states:{isIdle:!0,isWalking:!1,isRunning:!1,isAttacking:!1,isAttacking2:!1,isJumping:!1,isHit:!1,isDead:!1,dead:!1},position:{initialX:0,x:0},transition:"none"}}},watch:{windowWidth:{immediate:!0,handler:function(t,i){t!==i&&this.calculatePosition(t)}},resetGame:{immediate:!0,handler:function(t){t&&(this.reset(),this.warrior.states.isIdle=!0,this.$emit("game-was-reset"))}}},mounted:function(){var t=this;this.calculatePosition(this.windowWidth),setTimeout(function(){t.$emit("warrior-position-x",t.warrior.position.initialX)},500),setInterval(this.gameLoop,l)},computed:{warriorClasses:function(){return{"is-idle":this.warrior.states.isIdle,"is-walking":this.warrior.states.isWalking,"is-running":this.warrior.states.isRunning,"is-attacking":this.warrior.states.isAttacking,"is-attacking2":this.warrior.states.isAttacking2,"is-jumping":this.warrior.states.isJumping,"is-hit":this.warrior.states.isHit,"is-dead":this.warrior.states.isDead,dead:this.warrior.states.dead}}},methods:{timeout:function(t){return new d.a(function(i){return setTimeout(i,t)})},calculatePosition:function(t){t>=320&&t<360&&this.setPosition(30),t>=360&&t<410&&this.setPosition(23),t>=410&&t<480&&this.setPosition(18),t>=480&&t<768&&this.setPosition(12),t>=768&&t<1360&&this.setPosition(10),t>=1360&&t<1440&&this.setPosition(35),t>=1440&&this.setPosition(32)},setPosition:function(t){this.warrior.position.x=t,this.warrior.position.initialX=t},gameLoop:function(){this.wasHit&&this.getHit(),this.isDead&&!this.warrior.states.dead&&this.die(),this.actions.warrior.isLightAttacking&&(this.$emit("warrior-light-attack",!1),this.doLightAttack()),this.reset&&this.res},reset:function(){var t=this;m()(this.warrior.states).forEach(function(i){t.warrior.states[i]=!1})},die:function(){var t=this;return u()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.warrior.states.isIdle=!1,i.next=3,t.timeout(l);case 3:return t.warrior.states.isDead=!0,i.next=6,t.timeout(800);case 6:t.warrior.states.isDead=!1,t.warrior.states.dead=!0;case 8:case"end":return i.stop()}},i,t)}))()},getHit:function(){var t=this;return u()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.warrior.states.isIdle=!1,i.next=3,t.timeout(l);case 3:return t.warrior.states.isHit=!0,t.$emit("warrior-hit"),i.next=7,t.timeout(800);case 7:t.reset(),t.warrior.states.isIdle=!0;case 9:case"end":return i.stop()}},i,t)}))()},doLightAttack:function(){var t=this;return u()(o.a.mark(function i(){var n;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!((n=t.actions.monster.position.x-6)>0)){i.next=54;break}return t.warrior.states.isIdle=!1,i.next=5,t.timeout(l);case 5:return t.warrior.states.isWalking=!0,i.next=8,t.timeout(l);case 8:return t.warrior.transition=".1s linear",i.next=11,t.moveWarrior(.5,n/2+5);case 11:if(!i.sent){i.next=54;break}return i.next=15,t.timeout(l);case 15:return t.warrior.transition="none",t.warrior.states.isWalking=!1,t.warrior.states.isRunning=!0,t.warrior.transition=".1s linear",i.next=21,t.moveWithAABB(1.5);case 21:if(!i.sent){i.next=54;break}return i.next=25,t.timeout(l);case 25:return t.warrior.states.isRunning=!1,t.warrior.transition="none",i.next=29,t.lightAttack();case 29:if(!i.sent){i.next=54;break}return t.$emit("monster-was-hit",t.warrior.stats.attackDamage),i.next=34,t.timeout(l);case 34:return t.warrior.states.isAttacking=!1,i.next=37,t.timeout(l);case 37:return t.warrior.transition="0.1s linear",i.next=40,t.timeout(l);case 40:return t.warrior.states.isJumping=!0,i.next=43,t.moveWarriorBack(2);case 43:if(!i.sent){i.next=54;break}return i.next=47,t.timeout(l);case 47:return t.warrior.transition="none",t.reset(),t.warrior.states.isIdle=!0,t.$emit("finished-turn","monster"),i.next=53,t.timeout(l);case 53:t.$emit("monster-can-attack",!0);case 54:case"end":return i.stop()}},i,t)}))()},moveWithAABB:function(t){var i=this;return new d.a(function(n,e){var r=setInterval(function(){var e=i.AABB();i.warrior.position.x+=t,e&&i.warrior.position.x>=i.actions.monster.position.x-4&&(clearInterval(r),n(!0))},l)})},moveWarrior:function(t,i){var n=this;return new d.a(function(e,r){var s=setInterval(function(){n.warrior.position.x+=t,n.warrior.position.x>i&&(clearInterval(s),e(!0))},l)})},moveWarriorBack:function(t){var i=this;return new d.a(function(n,e){var r=setInterval(function(){i.warrior.position.x-=t,i.warrior.position.initialX>i.warrior.position.x&&(i.warrior.position.x=i.warrior.position.initialX,clearInterval(r),n(!0))},l)})},lightAttack:function(){var t,i=this;return new d.a((t=u()(o.a.mark(function t(n,e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.warrior.states.isAttacking=!0,t.next=3,i.timeout(850);case 3:n(!0);case 4:case"end":return t.stop()}},t,i)})),function(i,n){return t.apply(this,arguments)}))}}},f={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"app-warrior",class:t.warriorClasses,style:{left:t.warrior.position.x+"%",transition:t.warrior.transition},attrs:{id:"warrior"}},[n("div",{staticClass:"life-bar"},[t._v("\n    HP: "+t._s(t.actions.warrior.hp)+"\n    "),n("div",{staticClass:"green-bar",style:{width:t.actions.warrior.hp+"px"}})]),t._v(" "),"warrior"===t.currentTurn?n("div",{staticClass:"current-turn"}):t._e()])},staticRenderFns:[]};var v={name:"monster",props:["windowWidth","actions","currentTurn","monsterCanAttack","AABB","wasHit","isDead","resetGame"],data:function(){return{collided:!1,monster:{stats:{hp:this.actions.monster.hp,attackDamage:30},states:{isIdle:!0,isWalking:!1,isRunning:!1,isAttacking:!1,isAttacking2:!1,isJumping:!1,isHit:!1,isDead:!1,dead:!1},position:{initialX:0,x:0},transition:"none"}}},watch:{windowWidth:{immediate:!0,handler:function(t,i){t!==i&&this.calculatePosition(t)}},resetGame:{immediate:!0,handler:function(t){t&&(this.reset(),this.monster.states.isIdle=!0,this.$emit("game-was-reset"))}}},mounted:function(){var t=this;this.calculatePosition(this.windowWidth),setTimeout(function(){t.$emit("monster-position-x",t.monster.position.initialX)},500),setInterval(this.gameLoop,1e3/15)},computed:{monsterClasses:function(){return{"is-idle":this.monster.states.isIdle,"is-walking":this.monster.states.isWalking,"is-running":this.monster.states.isRunning,"is-attacking":this.monster.states.isAttacking,"is-attacking2":this.monster.states.isAttacking2,"is-jumping":this.monster.states.isJumping,"is-hit":this.monster.states.isHit,"is-dead":this.monster.states.isDead,dead:this.monster.states.dead}}},methods:{timeout:function(t){return new d.a(function(i){return setTimeout(i,t)})},calculatePosition:function(t){t>=320&&t<360&&this.setPosition(65),t>=360&&t<410&&this.setPosition(62),t>=410&&t<480&&this.setPosition(60),t>=480&&t<768&&this.setPosition(12),t>=768&&t<1360&&this.setPosition(70),t>=1360&&t<1440&&this.setPosition(65),t>=1440&&t<1920&&this.setPosition(71),t>=1920&&this.setPosition(69)},setPosition:function(t){this.monster.position.x=t,this.monster.position.initialX=t},gameLoop:function(){this.wasHit&&this.getHit(),this.isDead&&!this.monster.states.dead&&this.die(),this.wasHit||this.isDead||!this.monsterCanAttack||this.actions.warrior.position.x>0&&(this.$emit("monster-light-attack"),this.doLightAttack())},reset:function(){var t=this;m()(this.monster.states).forEach(function(i){t.monster.states[i]=!1})},die:function(){var t=this;return u()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.monster.states.isIdle=!1,i.next=3,t.timeout(1e3/15);case 3:return t.monster.states.isDead=!0,i.next=6,t.timeout(800);case 6:t.monster.states.isDead=!1,t.monster.states.dead=!0;case 8:case"end":return i.stop()}},i,t)}))()},getHit:function(){var t=this;return u()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.monster.states.isIdle=!1,i.next=3,t.timeout(1e3/15);case 3:return t.monster.states.isHit=!0,t.$emit("monster-hit"),i.next=7,t.timeout(800);case 7:t.reset(),t.monster.states.isIdle=!0;case 9:case"end":return i.stop()}},i,t)}))()},doLightAttack:function(){var t=this;return u()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t.actions.warrior.position.x>0)){i.next=43;break}return t.monster.states.isIdle=!1,i.next=5,t.timeout(1e3/15);case 5:return t.monster.transition="none",t.monster.states.isWalking=!1,t.monster.states.isRunning=!0,t.monster.transition=".1s linear",i.next=11,t.moveWithAABB(3);case 11:if(!i.sent){i.next=43;break}return i.next=15,t.timeout(1e3/15);case 15:return t.monster.states.isRunning=!1,t.monster.transition="none",i.next=19,t.lightAttack();case 19:if(!i.sent){i.next=43;break}return t.$emit("warrior-was-hit",t.monster.stats.attackDamage),i.next=24,t.timeout(1e3/15);case 24:return t.monster.states.isAttacking=!1,i.next=27,t.timeout(1e3/15);case 27:return t.monster.transition="0.1s linear",i.next=30,t.timeout(1e3/15);case 30:return t.monster.states.isJumping=!0,i.next=33,t.moveMonsterBack(2);case 33:if(!i.sent){i.next=43;break}return i.next=37,t.timeout(1e3/15);case 37:return t.monster.transition="none",t.reset(),t.monster.states.isIdle=!0,t.$emit("finished-turn","warrior"),i.next=43,t.timeout(1e3/15);case 43:case"end":return i.stop()}},i,t)}))()},moveWithAABB:function(t){var i=this;return new d.a(function(n,e){var r=setInterval(function(){var e=i.AABB();i.monster.position.x-=t,e&&i.monster.position.x<=i.actions.warrior.position.x+10&&(clearInterval(r),n(!0))},1e3/15)})},moveMonster:function(t,i){var n=this;return new d.a(function(e,r){var s=setInterval(function(){n.monster.position.x-=t,n.monster.position.x<i&&(clearInterval(s),e(!0))},1e3/15)})},lightAttack:function(){var t,i=this;return new d.a((t=u()(o.a.mark(function t(n,e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.monster.states.isAttacking=!0,t.next=3,i.timeout(850);case 3:n(!0);case 4:case"end":return t.stop()}},t,i)})),function(i,n){return t.apply(this,arguments)}))},moveMonsterBack:function(t){var i=this;return new d.a(function(n,e){var r=setInterval(function(){i.monster.position.x+=t,i.monster.position.initialX>i.monster.position.x&&(i.monster.position.x=i.monster.position.initialX,clearInterval(r),n(!0))},1e3/15)})}}},g={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"app-monster",class:t.monsterClasses,style:{left:t.monster.position.x+"%",transition:t.monster.transition},attrs:{id:"monster"}},[n("div",{staticClass:"life-bar"},[t._v("\n    HP: "+t._s(t.actions.monster.hp)+"\n    "),n("div",{staticClass:"green-bar",style:{width:t.actions.monster.hp+"px"}})]),t._v(" "),"monster"===t.currentTurn?n("div",{staticClass:"current-turn"}):t._e()])},staticRenderFns:[]};var k={name:"interface",props:["currentTurn","hp","monsterHp"],data:function(){return{inAction:!1,canDoAction:!0,showChooseDifferenct:!1}},methods:{lightAttack:function(){var t=this;this.showChooseDifferenct=!1,"warrior"===this.currentTurn&&this.hp>0&&!this.inAction&&(this.$emit("warrior-light-attack",!0),this.inAction=!0,setTimeout(function(){t.inAction=!1},1e3)),"warrior"===!this.currentTurn&&this.hp>0&&this.showNotYourTurn()},heal:function(){var t=this;"warrior"===this.currentTurn&&this.hp<100&&this.hp>0&&!this.inAction?(this.$emit("warrior-healing"),this.inAction=!0,setTimeout(function(){t.inAction=!1},1e3)):100===this.hp?(this.showChooseDifferenct=!0,setTimeout(function(){t.showChooseDifferenct=!1},1e3)):0!=hp&&0!=monsterHp&&"warrior"===!this.currentTurn&&this.showNotYourTurn()},showNotYourTurn:function(){var t=this;this.canDoAction=!1,setTimeout(function(){t.canDoAction=!0},1e3)}}},x={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"app-ui"},[n("h1",{staticClass:"current-turn"},[t._v("Current Turn: "+t._s(t.currentTurn))]),t._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!t.canDoAction,expression:"!canDoAction"}],staticClass:"not-your-turn"},[t._v("Wait for your turn!")]),t._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:t.showChooseDifferenct,expression:"showChooseDifferenct"}],staticClass:"not-your-turn"},[t._v("\n    Choose a different Action!\n  ")]),t._v(" "),t.hp<=0?n("h2",{staticClass:"end-game"},[t._v("You died")]):t._e(),t._v(" "),t.monsterHp<=0?n("h2",{staticClass:"end-game"},[t._v("You survived")]):t._e(),t._v(" "),t.hp<=0||t.monsterHp<=0?n("button",{staticClass:"reset-game-btn",on:{click:function(i){return t.$emit("reset-game")}}},[t._v("\n    PLAY AGAIN\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"ui-action-btns"},[n("button",{staticClass:"ui-attack-btn",on:{click:t.lightAttack}},[t._v("\n      ATTACK\n    ")]),t._v(" "),n("button",{staticClass:"ui-heal-btn",on:{click:t.heal}},[t._v("HEAL")])])])},staticRenderFns:[]};var A={name:"game",components:{"app-world":s,"app-warrior":n("VU/8")(p,f,!1,function(t){n("uqlk")},"data-v-a4292c54",null).exports,"app-monster":n("VU/8")(v,g,!1,function(t){n("GoOT")},"data-v-5a7c15f1",null).exports,"app-ui":n("VU/8")(k,x,!1,function(t){n("8MvV")},"data-v-1f52c13c",null).exports},data:function(){return{windowWidth:window.innerWidth,currentTurn:"warrior",monsterCanAttack:!1,reset:!1,state:{warrior:{hp:100,isLightAttacking:!1,wasHit:!1,position:{x:0}},monster:{hp:100,isLightAttacking:!1,wasHit:!1,position:{x:0}}}}},methods:{getPosition:function(t){var i=t.getBoundingClientRect();return{left:i.left+window.scrollY,top:i.top+window.scrollX}},damageMonster:function(t){this.state.monster.wasHit=!0,this.state.monster.hp-=t,this.state.monster.hp<0&&(this.state.monster.hp=0)},damageWarrior:function(t){this.state.warrior.wasHit=!0,this.state.warrior.hp-=t,this.state.warrior.hp<0&&(this.state.warrior.hp=0)},AABB:function(){var t=document.getElementById("warrior"),i=document.getElementById("monster"),n=t.getBoundingClientRect(),e=i.getBoundingClientRect();return n.left<e.left+e.width&&n.left+n.width>e.left&&n.top<e.top+e.height&&n.top+n.height>e.top},healWarrior:function(){this.state.warrior.hp<100&&(this.state.warrior.hp+=40),this.state.warrior.hp>=100&&(this.state.warrior.hp=100),this.currentTurn="monster",this.monsterCanAttack=!0},resetGame:function(){this.reset=!0,this.monsterCanAttack=!1,this.state.warrior.hp=100,this.state.monster.hp=100,this.currentTurn="warrior"}}},_={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"app-game"},[n("app-world"),t._v(" "),n("app-warrior",{attrs:{windowWidth:t.windowWidth,actions:t.state,AABB:t.AABB,currentTurn:t.currentTurn,wasHit:t.state.warrior.wasHit,isDead:t.state.warrior.hp<=0,resetGame:t.reset},on:{"game-was-reset":function(i){t.reset=!1},"warrior-light-attack":function(i){t.state.warrior.isLightAttacking=!1},"warrior-position-x":function(i){t.state.warrior.position.x=i},"monster-was-hit":function(i){return t.damageMonster(i)},"finished-turn":function(i){t.currentTurn=i},"monster-can-attack":function(i){t.monsterCanAttack=i},"warrior-hit":function(i){t.state.warrior.wasHit=!1}}}),t._v(" "),n("app-monster",{attrs:{windowWidth:t.windowWidth,actions:t.state,AABB:t.AABB,currentTurn:t.currentTurn,monsterCanAttack:t.monsterCanAttack,wasHit:t.state.monster.wasHit,isDead:t.state.monster.hp<=0,resetGame:t.reset},on:{"game-was-reset":function(i){t.reset=!1},"monster-light-attack":function(i){t.monsterCanAttack=!1},"warrior-was-hit":function(i){return t.damageWarrior(i)},"finished-turn":function(i){t.currentTurn=i},"monster-position-x":function(i){t.state.monster.position.x=i},"monster-hit":function(i){t.state.monster.wasHit=!1}}}),t._v(" "),n("app-ui",{attrs:{currentTurn:t.currentTurn,hp:t.state.warrior.hp,monsterHp:t.state.monster.hp},on:{"warrior-healing":t.healWarrior,"warrior-light-attack":function(i){t.state.warrior.isLightAttacking=i},"reset-game":function(i){return t.resetGame()}}})],1)},staticRenderFns:[]};var C={name:"app",components:{"app-game":n("VU/8")(A,_,!1,function(t){n("PKb2")},"data-v-4c6b6d80",null).exports}},T={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-game")],1)},staticRenderFns:[]};var B=n("VU/8")(C,T,!1,function(t){n("cXYk")},null,null).exports;new e.a({el:"#app",render:function(t){return t(B)}})},PKb2:function(t,i){},cXYk:function(t,i){},uqlk:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.b10a6021127dc68ad34a.js.map