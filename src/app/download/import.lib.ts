export const saveAsPromise = (): Promise<any> => {

  return import("file-saver").then(lib => {
    console.log("file-saver installed");
    return lib
  })
}


export const momentPromise = (): Promise<any> => {

  return import("moment").then(lib => {
    console.log("moment installed");
    return lib
  })
}
