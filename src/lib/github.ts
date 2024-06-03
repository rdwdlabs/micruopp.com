
export async function getPublicRepoData() {
  const root = "https://api.github.com/";
  const endpt = "users/micruopp/repos";
  const url  = root + endpt;

  console.log(`${Date.now()} [fetch] ${url}`);
  const res = await fetch(url);
  const json = await res.json();

  let data = [];
  let numRepos = 0;

  // it's easier to skip an element with a basic for loop than .map
  // is it though?
  for (let i = 0; i < json.length; i++) {
    let repo = json[i];
    // skip the profile README
    if (repo.name === 'micruopp') continue;
    data[numRepos] = {
      name: repo.name,
      desc: repo.description || "",
      url: repo.html_url,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      langEndpt: repo.languages_url,
    };
    numRepos++;
  }

  return data;
}

/**
 * Example response
 * {
    id: 665698976,
    node_id: 'R_kgDOJ63CoA',
    name: 'typing-tester',
    full_name: 'micruopp/typing-tester',
    private: false,
    owner: {
      login: 'micruopp',
      id: 4267858,
      node_id: 'MDQ6VXNlcjQyNjc4NTg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/4267858?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/micruopp',
      html_url: 'https://github.com/micruopp',
      followers_url: 'https://api.github.com/users/micruopp/followers',
      following_url: 'https://api.github.com/users/micruopp/following{/other_user}',
      gists_url: 'https://api.github.com/users/micruopp/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/micruopp/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/micruopp/subscriptions',
      organizations_url: 'https://api.github.com/users/micruopp/orgs',
      repos_url: 'https://api.github.com/users/micruopp/repos',
      events_url: 'https://api.github.com/users/micruopp/events{/privacy}',
      received_events_url: 'https://api.github.com/users/micruopp/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/micruopp/typing-tester',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/micruopp/typing-tester',
    forks_url: 'https://api.github.com/repos/micruopp/typing-tester/forks',
    keys_url: 'https://api.github.com/repos/micruopp/typing-tester/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/micruopp/typing-tester/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/micruopp/typing-tester/teams',
    hooks_url: 'https://api.github.com/repos/micruopp/typing-tester/hooks',
    issue_events_url: 'https://api.github.com/repos/micruopp/typing-tester/issues/events{/number}',
    events_url: 'https://api.github.com/repos/micruopp/typing-tester/events',
    assignees_url: 'https://api.github.com/repos/micruopp/typing-tester/assignees{/user}',
    branches_url: 'https://api.github.com/repos/micruopp/typing-tester/branches{/branch}',
    tags_url: 'https://api.github.com/repos/micruopp/typing-tester/tags',
    blobs_url: 'https://api.github.com/repos/micruopp/typing-tester/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/micruopp/typing-tester/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/micruopp/typing-tester/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/micruopp/typing-tester/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/micruopp/typing-tester/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/micruopp/typing-tester/languages',
    stargazers_url: 'https://api.github.com/repos/micruopp/typing-tester/stargazers',
    contributors_url: 'https://api.github.com/repos/micruopp/typing-tester/contributors',
    subscribers_url: 'https://api.github.com/repos/micruopp/typing-tester/subscribers',
    subscription_url: 'https://api.github.com/repos/micruopp/typing-tester/subscription',
    commits_url: 'https://api.github.com/repos/micruopp/typing-tester/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/micruopp/typing-tester/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/micruopp/typing-tester/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/micruopp/typing-tester/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/micruopp/typing-tester/contents/{+path}',
    compare_url: 'https://api.github.com/repos/micruopp/typing-tester/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/micruopp/typing-tester/merges',
    archive_url: 'https://api.github.com/repos/micruopp/typing-tester/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/micruopp/typing-tester/downloads',
    issues_url: 'https://api.github.com/repos/micruopp/typing-tester/issues{/number}',
    pulls_url: 'https://api.github.com/repos/micruopp/typing-tester/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/micruopp/typing-tester/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/micruopp/typing-tester/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/micruopp/typing-tester/labels{/name}',
    releases_url: 'https://api.github.com/repos/micruopp/typing-tester/releases{/id}',
    deployments_url: 'https://api.github.com/repos/micruopp/typing-tester/deployments',
    created_at: '2023-07-12T19:45:45Z',
    updated_at: '2023-07-12T19:49:39Z',
    pushed_at: '2023-07-12T19:49:35Z',
    git_url: 'git://github.com/micruopp/typing-tester.git',
    ssh_url: 'git@github.com:micruopp/typing-tester.git',
    clone_url: 'https://github.com/micruopp/typing-tester.git',
    svn_url: 'https://github.com/micruopp/typing-tester',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main'
  }
 */
