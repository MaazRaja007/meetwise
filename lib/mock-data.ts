export type Role = 'owner' | 'admin' | 'manager' | 'staff';

export type MeetingSource = 'upload' | 'live';

export type MeetingStatus =
  | 'uploaded'
  | 'recording'
  | 'transcribing'
  | 'summarizing'
  | 'done'
  | 'failed';

export type ActionItem = {
  task: string;
  owner: string;
  dueDate: string;
  isComplete: boolean;
};

export type MeetingRecord = {
  id: string;
  title: string;
  source: MeetingSource;
  status: MeetingStatus;
  createdAt: string;
  duration: string;
  transcript: string[];
  summary: string;
  actionItems: ActionItem[];
};

export const mockMeetings: MeetingRecord[] = [
  {
    id: 'meeting_1',
    title: 'Quarterly planning',
    source: 'live',
    status: 'done',
    createdAt: '2026-10-12',
    duration: '42 min',
    transcript: [
      'Ayesha: We need to simplify the onboarding flow before launch.',
      'M. Ali: I agree. We need to review the support queue before we ship.',
      'Sarah: We have one customer escalation that can be closed if we fix the retention issue.'
    ],
    summary:
      'The team aligned on a simplified onboarding flow, a tighter retention fix, and a follow-up customer support review before launch.',
    actionItems: [
      { task: 'Finalize onboarding checklist', owner: 'M. Ali', dueDate: '2026-10-18', isComplete: false },
      { task: 'Review support queue', owner: 'Sarah Lee', dueDate: '2026-10-20', isComplete: true },
      { task: 'Publish Q3 roadmap', owner: 'Ayesha Khan', dueDate: '2026-10-22', isComplete: false }
    ]
  },
  {
    id: 'meeting_2',
    title: 'Hiring sync',
    source: 'upload',
    status: 'transcribing',
    createdAt: '2026-10-09',
    duration: '31 min',
    transcript: [
      'Daniel: We need more engineering capacity for the AI pipeline.',
      'Ayesha: We can approve hiring once the prototype is validated.'
    ],
    summary:
      'The team discussed staffing needs and agreed to validate the AI prototype before approving additional engineering hires.',
    actionItems: [
      { task: 'Complete prototype validation', owner: 'Daniel Smith', dueDate: '2026-10-17', isComplete: false },
      { task: 'Prepare hiring budget', owner: 'Ayesha Khan', dueDate: '2026-10-18', isComplete: false }
    ]
  }
];

export const mockMeetingDetails: Record<string, MeetingRecord> = Object.fromEntries(
  mockMeetings.map((meeting) => [meeting.id, meeting])
);
