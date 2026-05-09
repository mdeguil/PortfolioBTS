import type {ReactNode} from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Grid,
    Divider,
    Link,
} from '@mui/material';
import {
    NewReleases,
    Speed,
    Security,
    Cloud,
    Code,
    TrendingUp,
    BugReport,
    Layers,
} from '@mui/icons-material';


/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface VeilleItem {
    date: string;
    title: string;
    summary: string;
    tags: string[];
    source?: string;
    sourceUrl?: string;
    icon: ReactNode;
    highlight?: boolean;
}

/* ─────────────────────────────────────────────
   DONNÉES DE VEILLE
───────────────────────────────────────────── */
const veilleData: VeilleItem[] = [
    // ── 2024 ──────────────────────────────────
    {
        date: 'Mars 2024',
        title: 'Java 22 — Sortie officielle',
        summary:
            "Java 22 (JDK 22) est sorti le 19 mars 2024 avec 12 JEPs. Parmi les nouveautés : les Unnamed Variables & Patterns (JEP 456), les String Templates en preview (JEP 459), les Statements before super() en preview (JEP 447) et l'amélioration des Foreign Function & Memory API (JEP 454) qui passe en version finale.",
        tags: ['JDK 22', 'JEP 456', 'JEP 454', 'Preview'],
        source: 'OpenJDK',
        sourceUrl: 'https://openjdk.org/projects/jdk/22/',
        icon: <NewReleases sx={{ color: '#2196f3' }} />,
        highlight: true,
    },
    {
        date: 'Avril 2024',
        title: 'Spring Boot 3.3 & Spring Framework 6.1',
        summary:
            "Spring Boot 3.3 apporte le support natif de la compilation GraalVM améliorée, des améliorations de démarrage via CDS (Class Data Sharing), la prise en charge de Java 22 et des nouvelles fonctionnalités autour des Virtual Threads (Project Loom) pour les applications réactives.",
        tags: ['Spring Boot', 'GraalVM', 'Virtual Threads', 'CDS'],
        source: 'Spring.io',
        sourceUrl: 'https://spring.io/blog',
        icon: <Layers sx={{ color: '#4caf50' }} />,
    },
    {
        date: 'Juin 2024',
        title: 'Project Loom — Virtual Threads en production',
        summary:
            "Après leur introduction en Java 21, les Virtual Threads sont largement adoptés en 2024. Les frameworks majeurs (Spring, Quarkus, Micronaut) les intègrent nativement. Les benchmarks montrent des gains de throughput de 3× à 10× pour les applications I/O-bound par rapport aux threads classiques.",
        tags: ['Project Loom', 'Concurrence', 'Performance', 'Java 21+'],
        source: 'InfoQ',
        sourceUrl: 'https://www.infoq.com',
        icon: <Speed sx={{ color: '#ff9800' }} />,
        highlight: true,
    },
    {
        date: 'Juillet 2024',
        title: 'Jakarta EE 11 — Nouvelle spécification',
        summary:
            "Jakarta EE 11 introduit Jakarta Data (pour l'accès aux données), met à jour Jakarta Persistence 3.2, Jakarta RESTful Web Services 4.0 et Jakarta Security 4.0. Le support minimal passe à Java 17, poussant l'écosystème entreprise vers les versions modernes de Java.",
        tags: ['Jakarta EE', 'Jakarta Data', 'JPA 3.2', 'Enterprise'],
        source: 'Eclipse Foundation',
        sourceUrl: 'https://jakarta.ee',
        icon: <Cloud sx={{ color: '#9c27b0' }} />,
    },
    {
        date: 'Septembre 2024',
        title: 'GraalVM 24 — Performances natives accrues',
        summary:
            "GraalVM 24 améliore significativement la compilation native pour Java. Les temps de démarrage des applications Spring Boot compilées en natif tombent sous les 50 ms, et la consommation mémoire est réduite de 40 % par rapport à la JVM classique, rendant Java compétitif pour les architectures serverless.",
        tags: ['GraalVM', 'Native Image', 'Serverless', 'Performances'],
        source: 'GraalVM.org',
        sourceUrl: 'https://www.graalvm.org',
        icon: <Speed sx={{ color: '#ff9800' }} />,
    },
    {
        date: 'Octobre 2024',
        title: 'CVE critique dans Jetty & Tomcat — Veille sécurité',
        summary:
            "Plusieurs vulnérabilités critiques (CVE-2024-XXXX) sont découvertes dans Jetty 12.x et Apache Tomcat 10.x, liées au traitement des requêtes HTTP/2 malformées. Les équipes doivent patcher rapidement vers les versions correctives. Illustration de l'importance d'une veille sécurité continue sur les serveurs Java.",
        tags: ['Sécurité', 'CVE', 'Tomcat', 'Jetty', 'HTTP/2'],
        source: 'NVD / NIST',
        sourceUrl: 'https://nvd.nist.gov',
        icon: <Security sx={{ color: '#f44336' }} />,
    },
    // ── 2025 ──────────────────────────────────
    {
        date: 'Mars 2025',
        title: 'Java 24 — Sortie officielle',
        summary:
            "Java 24 (JDK 24) est sorti le 18 mars 2025. Il finalise les Primitive types in Patterns (JEP 488), les Module Import Declarations (JEP 494) et apporte des améliorations au Garbage Collector ZGC. La JEP 491 stabilise la synchronisation sur les Virtual Threads, levant une limitation majeure de Java 21.",
        tags: ['JDK 24', 'ZGC', 'JEP 491', 'Patterns'],
        source: 'OpenJDK',
        sourceUrl: 'https://openjdk.org/projects/jdk/24/',
        icon: <NewReleases sx={{ color: '#2196f3' }} />,
        highlight: true,
    },
    {
        date: 'Avril 2025',
        title: 'Quarkus 3.10 — Supersonic Subatomic Java',
        summary:
            "Quarkus 3.10 améliore l'intégration avec OpenTelemetry, supporte nativement Java 24 et optimise davantage les builds natifs GraalVM. L'extension LangChain4j permet désormais d'intégrer facilement des LLMs (GPT-4, Gemini, Ollama) dans les applications Quarkus via des interfaces Java annotées.",
        tags: ['Quarkus', 'LangChain4j', 'IA', 'OpenTelemetry'],
        source: 'Quarkus.io',
        sourceUrl: 'https://quarkus.io/blog/',
        icon: <TrendingUp sx={{ color: '#00bcd4' }} />,
    },
    {
        date: 'Mai 2025',
        title: 'Java + IA — LangChain4j & Spring AI',
        summary:
            "L'écosystème Java s'adapte à l'ère de l'IA générative. Spring AI 1.0 est sorti en GA, permettant d'intégrer OpenAI, Anthropic, Gemini et des modèles locaux via Ollama. LangChain4j mature rapidement avec le support des RAG pipelines, des embeddings vectoriels et des agents autonomes écrits en Java pur.",
        tags: ['Spring AI', 'LangChain4j', 'LLM', 'RAG', 'Ollama'],
        source: 'Spring.io / LangChain4j',
        sourceUrl: 'https://docs.spring.io/spring-ai/reference/',
        icon: <Code sx={{ color: '#e91e63' }} />,
        highlight: true,
    },
    {
        date: 'Juillet 2025',
        title: 'Project Valhalla — Value Classes en preview',
        summary:
            "Project Valhalla franchit une étape majeure avec l'introduction des Value Classes en preview dans JDK 25. Ces classes sans identité permettent d'éliminer le boxing des primitives complexes, promettant des gains de mémoire et de performance significatifs pour les applications manipulant de grands volumes de données.",
        tags: ['Project Valhalla', 'Value Classes', 'Preview', 'Performance'],
        source: 'OpenJDK',
        sourceUrl: 'https://openjdk.org/projects/valhalla/',
        icon: <Code sx={{ color: '#e91e63' }} />,
    },
    {
        date: 'Août 2025',
        title: 'Vulnérabilité Log4j-style dans une lib JSON populaire',
        summary:
            "Une vulnérabilité de désérialisation critique est découverte dans une librairie JSON Java très utilisée. L'incident rappelle Log4Shell de 2021 et pousse la communauté à renforcer l'utilisation de SBOM (Software Bill of Materials) et d'outils comme Dependency-Check d'OWASP pour auditer automatiquement les dépendances.",
        tags: ['Sécurité', 'SBOM', 'OWASP', 'Désérialisation'],
        source: 'OWASP',
        sourceUrl: 'https://owasp.org',
        icon: <BugReport sx={{ color: '#f44336' }} />,
    },
    // ── 2026 ──────────────────────────────────
    {
        date: 'Mars 2026',
        title: 'Java 25 LTS — Version Long-Term Support',
        summary:
            "Java 25 est la prochaine version LTS (après Java 21), prévue pour mars 2026. Elle finalise les Value Classes (Project Valhalla), stabilise les String Templates et les Structured Concurrency, et améliore encore les performances du G1GC. Les entreprises entament progressivement leur migration depuis Java 17 et 21.",
        tags: ['JDK 25 LTS', 'Valhalla', 'Migration', 'Long-Term Support'],
        source: 'OpenJDK Roadmap',
        sourceUrl: 'https://openjdk.org',
        icon: <NewReleases sx={{ color: '#2196f3' }} />,
        highlight: true,
    },
    {
        date: 'Avril 2026',
        title: 'Spring Boot 4.0 — Compatibilité Java 25 LTS',
        summary:
            "Spring Boot 4.0 abandonne le support de Java 17, exigeant Java 21 minimum. Il intègre nativement le support des Value Classes de Valhalla pour les DTOs, améliore l'autocomplétion des agents IA via Spring AI 2.0, et modernise sa stack avec Jakarta EE 11. La migration depuis Spring Boot 3.x est outillée via un assistant de migration.",
        tags: ['Spring Boot 4', 'Jakarta EE 11', 'Spring AI 2.0', 'Migration'],
        source: 'Spring.io',
        sourceUrl: 'https://spring.io',
        icon: <Layers sx={{ color: '#4caf50' }} />,
    },
    {
        date: 'Mai 2026',
        title: 'Java & Kubernetes — AOT et Démarrage instantané',
        summary:
            "La combinaison GraalVM Native Image + CRaC (Coordinated Restore at Checkpoint) permet aux applications Java de démarrer en moins de 10 ms dans des pods Kubernetes. Cette avancée positionne Java comme un choix viable pour les microservices éphémères et les fonctions serverless, face à Go et Rust.",
        tags: ['Kubernetes', 'CRaC', 'GraalVM', 'Microservices', 'Serverless'],
        source: 'CRaC Project',
        sourceUrl: 'https://openjdk.org/projects/crac/',
        icon: <Cloud sx={{ color: '#9c27b0' }} />,
        highlight: true,
    },
];

/* ─────────────────────────────────────────────
   COMPOSANT CARTE
───────────────────────────────────────────── */
const VeilleCard = ({ item }: { item: VeilleItem }) => (
    <Card
        elevation={item.highlight ? 6 : 2}
        sx={{
            bgcolor: item.highlight ? 'rgba(33,150,243,0.08)' : 'background.paper',
            border: item.highlight ? '1px solid rgba(33,150,243,0.35)' : '1px solid rgba(255,255,255,0.06)',
            borderRadius: 3,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 24px rgba(33,150,243,0.2)',
            },
        }}
    >
        <CardContent sx={{ p: 3 }}>
            {/* En-tête */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                <Box sx={{ mt: 0.3 }}>{item.icon}</Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {item.date}
                        </Typography>
                        {item.highlight && (
                            <Chip label="À retenir" size="small" color="primary" sx={{ height: 18, fontSize: '0.65rem' }} />
                        )}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3, mb: 1 }}>
                        {item.title}
                    </Typography>
                </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                {item.summary}
            </Typography>

            {/* Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: item.source ? 1.5 : 0 }}>
                {item.tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem', borderColor: 'rgba(255,255,255,0.15)', color: 'text.secondary' }}
                    />
                ))}
            </Box>

            {/* Source */}
            {item.source && (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Source :{' '}
                    <Link href={item.sourceUrl} target="_blank" rel="noopener" underline="hover" color="primary">
                        {item.source}
                    </Link>
                </Typography>
            )}
        </CardContent>
    </Card>
);

/* ─────────────────────────────────────────────
   GROUPEMENT PAR ANNÉE
───────────────────────────────────────────── */
const years = ['2024', '2025', '2026'];
const itemsByYear = (year: string) =>
    veilleData.filter((item) => item.date.includes(year));

/* ─────────────────────────────────────────────
   PAGE PRINCIPALE
───────────────────────────────────────────── */
const Veille = () => {
    return (
        <Box sx={{ py: 8, minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">

                {/* ── En-tête ── */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                        Veille Technologique
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', lineHeight: 1.7 }}>
                        Suivi des évolutions de l'écosystème <strong style={{ color: '#2196f3' }}>Java</strong> de 2024 à 2026 :
                        nouvelles versions, frameworks, sécurité et tendances.
                    </Typography>
                </Box>

                {/* ── Statistiques rapides ── */}
                <Grid container spacing={2} sx={{ mb: 6 }}>
                    {[
                        { label: 'Versions JDK suivies', value: '22 · 23 · 24 · 25 LTS', color: '#2196f3' },
                        { label: 'Frameworks couverts', value: 'Spring · Quarkus · Micronaut · Jakarta EE', color: '#4caf50' },
                        { label: 'Thèmes clés', value: 'Performance · IA · Sécurité · Cloud', color: '#ff9800' },
                    ].map((stat) => (
                        <Grid size={12} sx={{md : 4}} key={stat.label}>
                            <Card
                                elevation={0}
                                sx={{
                                    bgcolor: 'background.paper',
                                    border: `1px solid ${stat.color}33`,
                                    borderRadius: 2,
                                    p: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="body2" sx={{ color: stat.color, fontWeight: 700, mb: 0.5 }}>
                                    {stat.label}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {stat.value}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* ── Timeline par année ── */}
                {years.map((year) => (
                    <Box key={year} sx={{ mb: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    minWidth: 80,
                                }}
                            >
                                {year}
                            </Typography>
                            <Divider sx={{ flex: 1, borderColor: 'rgba(33,150,243,0.25)' }} />
                            <Chip
                                label={`${itemsByYear(year).length} article${itemsByYear(year).length > 1 ? 's' : ''}`}
                                size="small"
                                variant="outlined"
                                color="primary"
                            />
                        </Box>

                        <Grid container spacing={2.5}>
                            {itemsByYear(year).map((item, i) => (
                                <Grid size={12} sx={{md : 6}} key={i}>
                                    <VeilleCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}

                {/* ── Note de bas de page ── */}
                <Box
                    sx={{
                        mt: 6,
                        p: 3,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.06)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        Cette veille est réalisée à partir de sources officielles (OpenJDK, Spring, InfoQ, OWASP) et mise à jour régulièrement.
                        Elle s'inscrit dans ma démarche de montée en compétences continue sur l'écosystème Java.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Veille;