import { Link } from 'react-router-dom';
import { FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import TeacherAvatar from '../teachers/TeacherAvatar';
import { teachers } from '../../data/teachers';

const TeacherSpotlight = ({ items = teachers }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {items.map((teacher) => (
      <article
        key={teacher.id}
        className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <TeacherAvatar src={teacher.avatar} alt={teacher.avatarAlt} size="sm" />
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-primary-200 bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
              {teacher.honorific}
            </span>
            <h3 className="mt-1.5 text-lg font-bold leading-snug text-secondary-800">{teacher.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-600">{teacher.title}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
          <li className="flex gap-2.5">
            <FaAward className="mt-1 flex-shrink-0 text-primary-500" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-secondary-800">Ijazah:</strong> {teacher.narration}
            </span>
          </li>
          {teacher.authorizingSheikh && (
            <li className="flex gap-2.5">
              <FaCertificate className="mt-1 flex-shrink-0 text-primary-500" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-secondary-800">Authorized by:</strong>{' '}
                {teacher.authorizingSheikh}
                {teacher.authorizingTitle ? ` — ${teacher.authorizingTitle}` : ''}
              </span>
            </li>
          )}
          {teacher.azharGraduationBadge && (
            <li className="flex gap-2.5">
              <FaGraduationCap className="mt-1 flex-shrink-0 text-primary-500" aria-hidden="true" />
              <span>{teacher.azharGraduationBadge}</span>
            </li>
          )}
        </ul>

        <p className="mt-4 flex-1 text-sm leading-7 text-gray-700">{teacher.bio}</p>

        <Link
          to="/teachers"
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-secondary-300 bg-secondary-50 px-4 py-2.5 text-sm font-bold text-secondary-700 transition-colors hover:border-secondary-500 hover:bg-secondary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
        >
          View Ijazah and credentials
        </Link>
      </article>
    ))}
  </div>
);

export default TeacherSpotlight;
