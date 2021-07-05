function fetchMemberNames(groupId) {
  return getMemberGroup(groupId)
    .then(memberGroup => getMembers(memberGroup))
    .then(members => members.map(({name}) => name))
    .catch(err => {
      showNotify(err.message);
    });
}

fetchMemberNames('gid-11')
  .then(names => {
    if(names) {
      addMembers(names);
    }
  });