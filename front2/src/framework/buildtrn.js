function createTrn(trn, user) {
  let cloneQuestions = [...trn.questions];
  let questions = [];
  while (trn.needQ != questions.length) {
    let item = Math.floor(Math.random() * cloneQuestions.length);
    let q = cloneQuestions.splice(item, 1);
    q.nomerQ = questions.length+1;
    questions.push(q[0]);
  }
  let newtrn = {
    name: trn.name,
    descr: trn.descr,
    datestart: simpleDateFormat(new Date()),
    idtrn: trn._id,
    procent: trn.procent,
    questions: questions,
    user: user,
    state:{state:0, name:"Новый"}
  };
  console.log(newtrn);
  return newtrn;
}

function simpleDateFormat(date) {
  return date.getDate() + "." + (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getFullYear();
}

export {
  createTrn
}
