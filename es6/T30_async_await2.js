async function fetchMemberNames(groupId) {
  try {
    const memberGroup = await getMemberGroup(groupId);
    const members = await getMembers(memberGroup);

    return members.map(({name}) => name);
  }catch(err) {
    showNotify(err.message);
  }
}

fetchMemberNames('gid-11')
  .then(names => {
    if(names) {
      addMembers(names);
    }
  });