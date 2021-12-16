export const linkIds = {
 projects: 'projects',
 workflow: 'workflow',
 contact: 'contact',
 experience: 'experience',
};

const routes = {
 'my-projects': linkIds.projects,
 'my-workflow': linkIds.workflow,
 'contact-me': linkIds.contact,
 'my-experience': linkIds.experience,
 home: 'home',
};

export const idsToRoutes = {
 [linkIds.projects]: 'my-projects',
 [linkIds.workflow]: 'my-workflow',
 [linkIds.contact]: 'contact-me',
 [linkIds.experience]: 'my-experience',
 home: 'home',
};

export default routes;
