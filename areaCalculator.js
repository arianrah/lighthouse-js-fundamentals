const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0){
    return
  } else {
    let rectArea = length * width;
    return rectArea
  }
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0){
    return
  } else {
    let triArea = base * height / 2;
    return triArea
  }
}

const calculateCircleArea = function (radius){
  let pi = Math.PI;

  if (radius < 0){
    return
  } else {
    let circArea = pi * radius**2;
    return circArea
  }
}