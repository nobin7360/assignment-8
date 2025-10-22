const getInstalledApp=()=>{
    const installedAppStr=localStorage.getItem('installedApp');

    if(installedAppStr){
        const storedAppData=JSON.parse(installedAppStr);
        return storedAppData;
    }else{
        return [];
    }
}

const addToInstalledApp=(id)=>{

    const storedAppData=getInstalledApp();
    if(storedAppData.includes(id)){
        alert("App is already Installed.")
    }else{
        storedAppData.push(id);
        const data=JSON.stringify(storedAppData);
        localStorage.setItem("installedApp",data);
    }
}

const deleteApp = (id) => {
  const installedApps = getInstalledApp();
  const updatedApps = installedApps.filter(appId => appId !== id);
  localStorage.setItem("installedApp", JSON.stringify(updatedApps));
};
export {addToInstalledApp,getInstalledApp,deleteApp};