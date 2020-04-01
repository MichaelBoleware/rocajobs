//Action Types
export const SIGNINEMAIL = "SIGNINEMAIL";
export const SIGNINPHOTOURL = "SIGNINPHOTOURL";
export const SIGNINUID = "SIGNINUID";
export const SIGNINUSERNAME = "SIGNINUSERNAME";
export const SIGNOUT = "SIGNOUT";


//Action Creator
export function signInEmail (email){
   console.log(email);
   return{
      type: SIGNINEMAIL,
      payload: email
   };
}
export function signInPhotoUrl(photourl){
   
   return{
      type: SIGNINPHOTOURL,
      payload: photourl
   };
}
 export function signInUid(uid){
    return{
      type: SIGNINUID,
      payload: uid
    }
 }
 export function signInUsername (username){
    return{
      type: SIGNINUSERNAME,
      payload: username
    }
 }

export const signOut = () => ({
    type: SIGNOUT
});

