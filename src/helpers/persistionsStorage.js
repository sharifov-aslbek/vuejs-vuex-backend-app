export const getItem = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (err) {
      console.log("local storage getting err",);
      return null
   }
}

export const setItem = (key , data) => {
   try {
      localStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      console.log("err local storage setting");
   }
}

export const removeItem = (key) => {
   try {
      localStorage.removeItem(key)
   } catch (error) {
      console.log("err delete storage ");
   }
}