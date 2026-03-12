import { Project } from '../types/project';

const PRESENT_LABEL = 'Present';

const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const toTimestamp = (date: string) => new Date(date).getTime();

const isPresent = (date?: string) => date === PRESENT_LABEL;

export const getProjectSortDate = (project: Project) =>
  isPresent(project.endDate)
    ? Number.POSITIVE_INFINITY
    : toTimestamp(project.endDate ?? project.startDate);

export const formatProjectTimeframe = (project: Project) => {
  const startLabel = monthYearFormatter.format(new Date(project.startDate));

  if (!project.endDate) {
    return startLabel;
  }

  if (isPresent(project.endDate)) {
    return `${startLabel} - ${PRESENT_LABEL}`;
  }

  const endLabel = monthYearFormatter.format(new Date(project.endDate));

  return startLabel === endLabel ? startLabel : `${startLabel} - ${endLabel}`;
};
