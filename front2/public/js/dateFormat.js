function simpleDateFormat(date) {
  return date.getDate()+"."+(date.getMonth()+1).toString().padStart(2,'0')+'.'+date.getFullYear();
}

export {simpleDateFormat};
