gdjs.CreditsCode = {};
gdjs.CreditsCode.GDTileGrassObjects1= [];
gdjs.CreditsCode.GDTileGrassObjects2= [];
gdjs.CreditsCode.GDTileDirtObjects1= [];
gdjs.CreditsCode.GDTileDirtObjects2= [];
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDPlayerCutsceneObjects1= [];
gdjs.CreditsCode.GDPlayerCutsceneObjects2= [];
gdjs.CreditsCode.GDHitboxLeftObjects1= [];
gdjs.CreditsCode.GDHitboxLeftObjects2= [];
gdjs.CreditsCode.GDHitboxRightObjects1= [];
gdjs.CreditsCode.GDHitboxRightObjects2= [];
gdjs.CreditsCode.GDEnemySpikeGhost1Objects1= [];
gdjs.CreditsCode.GDEnemySpikeGhost1Objects2= [];
gdjs.CreditsCode.GDEnemySpikeGhost2Objects1= [];
gdjs.CreditsCode.GDEnemySpikeGhost2Objects2= [];
gdjs.CreditsCode.GDEnemySpikeGhost3Objects1= [];
gdjs.CreditsCode.GDEnemySpikeGhost3Objects2= [];
gdjs.CreditsCode.GDObjectBulletObjects1= [];
gdjs.CreditsCode.GDObjectBulletObjects2= [];
gdjs.CreditsCode.GDTileTorchObjects1= [];
gdjs.CreditsCode.GDTileTorchObjects2= [];
gdjs.CreditsCode.GDTileTorchLightHighObjects1= [];
gdjs.CreditsCode.GDTileTorchLightHighObjects2= [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDObject_95LogoObjects1= [];
gdjs.CreditsCode.GDObject_95LogoObjects2= [];


gdjs.CreditsCode.asyncCallback18647884 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(83), (runtimeScene) => (gdjs.CreditsCode.asyncCallback18647884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\music\\ending.wav", false, 100, 1);
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.CreditsCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Object_Logo"), gdjs.CreditsCode.GDObject_95LogoObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsObjects1[i].setY(gdjs.CreditsCode.GDCreditsObjects1[i].getY() + (-(0.8)));
}
}{for(var i = 0, len = gdjs.CreditsCode.GDObject_95LogoObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDObject_95LogoObjects1[i].setY(gdjs.CreditsCode.GDObject_95LogoObjects1[i].getY() + (-(0.8)));
}
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDTileGrassObjects1.length = 0;
gdjs.CreditsCode.GDTileGrassObjects2.length = 0;
gdjs.CreditsCode.GDTileDirtObjects1.length = 0;
gdjs.CreditsCode.GDTileDirtObjects2.length = 0;
gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDPlayerCutsceneObjects1.length = 0;
gdjs.CreditsCode.GDPlayerCutsceneObjects2.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects1.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects2.length = 0;
gdjs.CreditsCode.GDHitboxRightObjects1.length = 0;
gdjs.CreditsCode.GDHitboxRightObjects2.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost1Objects1.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost1Objects2.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost2Objects1.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost2Objects2.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost3Objects1.length = 0;
gdjs.CreditsCode.GDEnemySpikeGhost3Objects2.length = 0;
gdjs.CreditsCode.GDObjectBulletObjects1.length = 0;
gdjs.CreditsCode.GDObjectBulletObjects2.length = 0;
gdjs.CreditsCode.GDTileTorchObjects1.length = 0;
gdjs.CreditsCode.GDTileTorchObjects2.length = 0;
gdjs.CreditsCode.GDTileTorchLightHighObjects1.length = 0;
gdjs.CreditsCode.GDTileTorchLightHighObjects2.length = 0;
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDObject_95LogoObjects1.length = 0;
gdjs.CreditsCode.GDObject_95LogoObjects2.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
