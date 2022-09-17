export const transformMongodbData = (data) => {
  if (Array.isArray(data)) {
    let newDataArray = [];
    data.forEach((element) => {
      newDataArray.push(element.toObject());
    });
    return newDataArray;
  }
  return data.toObject();
};
