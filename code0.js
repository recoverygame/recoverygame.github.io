gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDTileGrassObjects1= [];
gdjs.Main_32MenuCode.GDTileGrassObjects2= [];
gdjs.Main_32MenuCode.GDTileGrassObjects3= [];
gdjs.Main_32MenuCode.GDTileDirtObjects1= [];
gdjs.Main_32MenuCode.GDTileDirtObjects2= [];
gdjs.Main_32MenuCode.GDTileDirtObjects3= [];
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];
gdjs.Main_32MenuCode.GDPlayerObjects3= [];
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects1= [];
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects2= [];
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects3= [];
gdjs.Main_32MenuCode.GDHitboxLeftObjects1= [];
gdjs.Main_32MenuCode.GDHitboxLeftObjects2= [];
gdjs.Main_32MenuCode.GDHitboxLeftObjects3= [];
gdjs.Main_32MenuCode.GDHitboxRightObjects1= [];
gdjs.Main_32MenuCode.GDHitboxRightObjects2= [];
gdjs.Main_32MenuCode.GDHitboxRightObjects3= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects1= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects2= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects3= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects1= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects2= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects3= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects1= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects2= [];
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects3= [];
gdjs.Main_32MenuCode.GDObjectBulletObjects1= [];
gdjs.Main_32MenuCode.GDObjectBulletObjects2= [];
gdjs.Main_32MenuCode.GDObjectBulletObjects3= [];
gdjs.Main_32MenuCode.GDTileTorchObjects1= [];
gdjs.Main_32MenuCode.GDTileTorchObjects2= [];
gdjs.Main_32MenuCode.GDTileTorchObjects3= [];
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects1= [];
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects2= [];
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects3= [];
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects1= [];
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects2= [];
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects3= [];
gdjs.Main_32MenuCode.GDUI_95logoObjects1= [];
gdjs.Main_32MenuCode.GDUI_95logoObjects2= [];
gdjs.Main_32MenuCode.GDUI_95logoObjects3= [];
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects1= [];
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2= [];
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects3= [];
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects1= [];
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2= [];
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects3= [];
gdjs.Main_32MenuCode.GDButtonLevel1Objects1= [];
gdjs.Main_32MenuCode.GDButtonLevel1Objects2= [];
gdjs.Main_32MenuCode.GDButtonLevel1Objects3= [];
gdjs.Main_32MenuCode.GDButtonLevel2Objects1= [];
gdjs.Main_32MenuCode.GDButtonLevel2Objects2= [];
gdjs.Main_32MenuCode.GDButtonLevel2Objects3= [];
gdjs.Main_32MenuCode.GDTextLevel1Objects1= [];
gdjs.Main_32MenuCode.GDTextLevel1Objects2= [];
gdjs.Main_32MenuCode.GDTextLevel1Objects3= [];
gdjs.Main_32MenuCode.GDTextLevel2Objects1= [];
gdjs.Main_32MenuCode.GDTextLevel2Objects2= [];
gdjs.Main_32MenuCode.GDTextLevel2Objects3= [];
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects1= [];
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects2= [];
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects3= [];
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects1= [];
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects2= [];
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects3= [];
gdjs.Main_32MenuCode.GDObjectClockObjects1= [];
gdjs.Main_32MenuCode.GDObjectClockObjects2= [];
gdjs.Main_32MenuCode.GDObjectClockObjects3= [];
gdjs.Main_32MenuCode.GDBackButtonSmallObjects1= [];
gdjs.Main_32MenuCode.GDBackButtonSmallObjects2= [];
gdjs.Main_32MenuCode.GDBackButtonSmallObjects3= [];
gdjs.Main_32MenuCode.GDBackground1Objects1= [];
gdjs.Main_32MenuCode.GDBackground1Objects2= [];
gdjs.Main_32MenuCode.GDBackground1Objects3= [];
gdjs.Main_32MenuCode.GDBackground2Objects1= [];
gdjs.Main_32MenuCode.GDBackground2Objects2= [];
gdjs.Main_32MenuCode.GDBackground2Objects3= [];
gdjs.Main_32MenuCode.GDBackSolidObjects1= [];
gdjs.Main_32MenuCode.GDBackSolidObjects2= [];
gdjs.Main_32MenuCode.GDBackSolidObjects3= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Main_32MenuCode.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.Main_32MenuCode.GDBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TileDirt"), gdjs.Main_32MenuCode.GDTileDirtObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileGrass"), gdjs.Main_32MenuCode.GDTileGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerTextLevel1"), gdjs.Main_32MenuCode.GDTimerTextLevel1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TimerTextLevel2"), gdjs.Main_32MenuCode.GDTimerTextLevel2Objects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimerTextLevel1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimerTextLevel1Objects1[i].setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTimerTextLevel2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTimerTextLevel2Objects1[i].setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackground1Objects1[i].setXOffset(gdjs.Main_32MenuCode.GDBackground1Objects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackground2Objects1[i].setXOffset(gdjs.Main_32MenuCode.GDBackground2Objects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTileGrassObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTileGrassObjects1[i].setXOffset(gdjs.Main_32MenuCode.GDTileGrassObjects1[i].getXOffset() + (2));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTileDirtObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTileDirtObjects1[i].setXOffset(gdjs.Main_32MenuCode.GDTileDirtObjects1[i].getXOffset() + (2));
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects2Objects = Hashtable.newFrom({"UI_buttonStartGame": gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2});
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 0: Beginning", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects2Objects = Hashtable.newFrom({"UI_buttonStartGame": gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonLevelSelectObjects2Objects = Hashtable.newFrom({"UI_buttonLevelSelect": gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2});
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "selectDelay");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "LevelSelect");
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonLevelSelectObjects2Objects = Hashtable.newFrom({"UI_buttonLevelSelect": gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects1Objects = Hashtable.newFrom({"UI_buttonStartGame": gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects1});
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("UI_buttonStartGame"), gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2[i].setAnimationName("held");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI_buttonStartGame"), gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2[i].setAnimationName("normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI_buttonLevelSelect"), gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonLevelSelectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2[i].setAnimationName("pressed");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI_buttonLevelSelect"), gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonLevelSelectObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2[i].setAnimationName("normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI_buttonStartGame"), gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDUI_9595buttonStartGameObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 0: Beginning", false);
}}

}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonLevel1Objects2Objects = Hashtable.newFrom({"ButtonLevel1": gdjs.Main_32MenuCode.GDButtonLevel1Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonLevel2Objects2Objects = Hashtable.newFrom({"ButtonLevel2": gdjs.Main_32MenuCode.GDButtonLevel2Objects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBackButtonSmallObjects2Objects = Hashtable.newFrom({"BackButtonSmall": gdjs.Main_32MenuCode.GDBackButtonSmallObjects2});
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "LevelSelect");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBackButtonSmallObjects1Objects = Hashtable.newFrom({"BackButtonSmall": gdjs.Main_32MenuCode.GDBackButtonSmallObjects1});
gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel1"), gdjs.Main_32MenuCode.GDButtonLevel1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonLevel1Objects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1: Field", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonLevel2"), gdjs.Main_32MenuCode.GDButtonLevel2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonLevel2Objects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2: Tower", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButtonSmall"), gdjs.Main_32MenuCode.GDBackButtonSmallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBackButtonSmallObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBackButtonSmallObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackButtonSmallObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackButtonSmallObjects2[i].setAnimationName("held");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButtonSmall"), gdjs.Main_32MenuCode.GDBackButtonSmallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDBackButtonSmallObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDBackButtonSmallObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackButtonSmallObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackButtonSmallObjects1[i].setAnimationName("normal");
}
}}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "LevelSelect");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "selectDelay") >= 0.3;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackSolid"), gdjs.Main_32MenuCode.GDBackSolidObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "BackgroundScroll", 0);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackSolidObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackSolidObjects1[i].setOpacity(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Logo");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Logo");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\music\\titlescreen.wav", true, 100, 1);
}}

}


{


gdjs.Main_32MenuCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList4(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList7(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTileGrassObjects1.length = 0;
gdjs.Main_32MenuCode.GDTileGrassObjects2.length = 0;
gdjs.Main_32MenuCode.GDTileGrassObjects3.length = 0;
gdjs.Main_32MenuCode.GDTileDirtObjects1.length = 0;
gdjs.Main_32MenuCode.GDTileDirtObjects2.length = 0;
gdjs.Main_32MenuCode.GDTileDirtObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerCutsceneObjects3.length = 0;
gdjs.Main_32MenuCode.GDHitboxLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDHitboxLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDHitboxLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDHitboxRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDHitboxRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDHitboxRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects1.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects2.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost1Objects3.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects1.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects2.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost2Objects3.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects1.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects2.length = 0;
gdjs.Main_32MenuCode.GDEnemySpikeGhost3Objects3.length = 0;
gdjs.Main_32MenuCode.GDObjectBulletObjects1.length = 0;
gdjs.Main_32MenuCode.GDObjectBulletObjects2.length = 0;
gdjs.Main_32MenuCode.GDObjectBulletObjects3.length = 0;
gdjs.Main_32MenuCode.GDTileTorchObjects1.length = 0;
gdjs.Main_32MenuCode.GDTileTorchObjects2.length = 0;
gdjs.Main_32MenuCode.GDTileTorchObjects3.length = 0;
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects1.length = 0;
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects2.length = 0;
gdjs.Main_32MenuCode.GDTileTorchLightHighObjects3.length = 0;
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDUI_95pressButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDUI_95logoObjects1.length = 0;
gdjs.Main_32MenuCode.GDUI_95logoObjects2.length = 0;
gdjs.Main_32MenuCode.GDUI_95logoObjects3.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects1.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects2.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonStartGameObjects3.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects1.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects2.length = 0;
gdjs.Main_32MenuCode.GDUI_95buttonLevelSelectObjects3.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel1Objects2.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel1Objects3.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel2Objects1.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel2Objects2.length = 0;
gdjs.Main_32MenuCode.GDButtonLevel2Objects3.length = 0;
gdjs.Main_32MenuCode.GDTextLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDTextLevel1Objects2.length = 0;
gdjs.Main_32MenuCode.GDTextLevel1Objects3.length = 0;
gdjs.Main_32MenuCode.GDTextLevel2Objects1.length = 0;
gdjs.Main_32MenuCode.GDTextLevel2Objects2.length = 0;
gdjs.Main_32MenuCode.GDTextLevel2Objects3.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects1.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects2.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel1Objects3.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects1.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects2.length = 0;
gdjs.Main_32MenuCode.GDTimerTextLevel2Objects3.length = 0;
gdjs.Main_32MenuCode.GDObjectClockObjects1.length = 0;
gdjs.Main_32MenuCode.GDObjectClockObjects2.length = 0;
gdjs.Main_32MenuCode.GDObjectClockObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackButtonSmallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackButtonSmallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackButtonSmallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackground1Objects1.length = 0;
gdjs.Main_32MenuCode.GDBackground1Objects2.length = 0;
gdjs.Main_32MenuCode.GDBackground1Objects3.length = 0;
gdjs.Main_32MenuCode.GDBackground2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBackground2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBackground2Objects3.length = 0;
gdjs.Main_32MenuCode.GDBackSolidObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackSolidObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackSolidObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList8(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
