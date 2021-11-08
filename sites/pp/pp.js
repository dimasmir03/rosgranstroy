$("a").click ( (e) => {
  console.log(e.target.innerHTML);
  window.location.href = '/ppi?ppn='+e.target.innerHTML;
})