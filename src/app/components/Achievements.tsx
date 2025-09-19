// app/components/Achievements.tsx
export default function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 font-heading">Achievements & Certifications</h2>
            <ul className="list-disc list-inside max-w-2xl mx-auto space-y-4">
                <li>
                    <strong>Certified React Developer</strong> - Awarded by AwesomeCert Inc. (2024)
                </li>
                <li>
                    <strong>Next.js Conf 2023 Speaker</strong> - Presented a talk on Server Components.
                </li>
                 {/* Add more achievements */}
            </ul>
        </section>
    );
}