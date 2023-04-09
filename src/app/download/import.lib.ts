export const saveAsPromise = (): Promise<any> => {

  return import("file-saver").then(lib => {
    console.log("file-saver installed");
    return lib
  })
}
