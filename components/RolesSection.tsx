import { roles } from "./data";

export default function RolesSection() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Role dashboards
          </p>
          <h2 className="section-title mt-4 text-brand-900">Tailored experiences for every role.</h2>
        </div>
        <a
          className="rounded-full border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-card"
          href="/contact"
        >
          Download App
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <div
            key={role.title}
            className="rounded-3xl bg-white p-6 shadow-card motion-safe:animate-rise"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-lg font-semibold text-brand-900">{role.title}</p>
              <div className="hover-pop">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50">
                  <img
                    src={
                      role.title === "Super Admin"
                        ? "/superadmin_dashboard.png"
                        : role.title === "Club Admin"
                        ? "/club_admin_dashboard.png"
                        : "/player_dashboard.png"
                    }
                    alt={`${role.title} dashboard`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="pop-preview">
                  <div className="pop-card">
                    <img
                      src={
                        role.title === "Super Admin"
                          ? "/superadmin_dashboard.png"
                          : role.title === "Club Admin"
                          ? "/club_admin_dashboard.png"
                          : "/player_dashboard.png"
                      }
                      alt={`${role.title} dashboard preview`}
                      className="h-[320px] w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-brand-700">{role.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {role.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-6 shadow-card">
          <p className="text-sm font-semibold text-brand-700">Super Admin</p>
          <p className="mt-4 text-3xl font-semibold text-brand-900">109 Clubs</p>
          <p className="mt-2 text-sm text-brand-600">75 Active Admins</p>
          <div className="mt-6 h-2 rounded-full bg-brand-100">
            <div className="h-2 w-2/3 rounded-full bg-brand-500" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="hover-pop">
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-brand-100 bg-brand-50">
                <img
                  src="/superadminprofile.png"
                  alt="Super Admin profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pop-preview">
                <div className="pop-card">
                  <img
                    src="/superadminprofile.png"
                    alt="Super Admin profile preview"
                    className="h-[300px] w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-brand-600">Admin profile view</span>
          </div>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white shadow-glow">
          <p className="text-sm font-semibold text-brand-100">Club Admin</p>
          <p className="mt-4 text-3xl font-semibold">Create Games</p>
          <p className="mt-2 text-sm text-white/80">Manage teams, leaderboards, and live play.</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {["Teams", "Games", "Scores"].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 px-3 py-2 text-xs">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="hover-pop">
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/30 bg-white/10">
                <img
                  src="/teamprofile.png"
                  alt="Team profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pop-preview">
                <div className="pop-card">
                  <img
                    src="/teamprofile.png"
                    alt="Team profile preview"
                    className="h-[300px] w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-white/80">Team profile snapshot</span>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-card">
          <p className="text-sm font-semibold text-brand-700">Player</p>
          <p className="mt-4 text-3xl font-semibold text-brand-900">15 Birdies</p>
          <p className="mt-2 text-sm text-brand-600">Live weekend skins game</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold text-brand-700">
              Continue Game
            </span>
            <span className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
              Join Game
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="hover-pop">
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-brand-100 bg-brand-50">
                <img
                  src="/playerprofile.png"
                  alt="Player profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pop-preview">
                <div className="pop-card">
                  <img
                    src="/playerprofile.png"
                    alt="Player profile preview"
                    className="h-[300px] w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-brand-600">Player profile view</span>
          </div>
        </div>
      </div>
    </section>
  );
}
