export function updateUser(payload) {  
    return { 
        type: "update_user", 
        payload 
    }
  };

export function recentActivity(payload){
    return {
        type:"recent_activity",
        payload
    }
}