const skills = [
    { id: 1234, skill: 'Javascript', desc: 'Code that does stuff' },
    { id: 1235, skill: 'CSS', desc: 'Code that adds style' },
    { id: 1236, skill: 'HTML', desc: 'Code that...' }
  ];
  
  module.exports = {
    getAll,
    getOne
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }