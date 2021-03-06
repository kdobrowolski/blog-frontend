export function dataUrlToFile(dataurl, filename) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {type:mime});
}

export function getFormat(dataUrl) {
  const firstSymbol = dataUrl.charAt(0);
  if (firstSymbol === '/') {
    return 'jpg';
  } else if (firstSymbol === 'i') {
    return 'png';
  } else {
    return 'jpeg';
  }
}

export const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
