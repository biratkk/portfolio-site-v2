import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { projectPreview } from "../../components/contentful/projectPreview";
import { formatDate } from "../../util/date";
import { poem } from "../../components/contentful/poems";
import placeholderArtImage from "../../public/placeholder-art.png";
import Image from "next/image";
import { Asset } from "contentful";
import { cf } from "../../util/contentful";
export async function getServerSideProps() {
    const poems = await poem.getEntries({
        content_type: "poems",
    });
    return { props: { poems } };
}

export default function Art({
    poems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(poems)
    return (
        <div className="mb-4">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-3xl border-b">Poems</h1>
                <div className="flex md:justify-start justify-center gap-4">
                    {poems?.items.map((entry, idx) => (
                        <Link href={`/art/poem/${entry.sys.id}`}>
                            <div className="w-96 h-fit border rounded-sm overflow-hidden group cursor-pointer">
                                <div className="h-44 overflow-hidden">
                                    <Image
                                        key={"place-holder-image" + idx}
                                        className="w-full"
                                        src={cf.makeImageURL(entry.fields.previewImage as Asset) ?? placeholderArtImage}
                                        alt="Picture of me"
                                        width={300}
                                        height={300}
                                        unoptimized
                                    />
                                </div>
                                <div className="flex flex-col gap-2 m-4">
                                    <span className="text-xs leading-none text-green-700 font-bold">
                                        {formatDate(new Date(entry.sys.updatedAt as string))}
                                    </span>
                                    <h2 className="text-2xl group-hover:underline font-bold">
                                        {entry.fields.title}
                                    </h2>
                                    <p className="text-sm">
                                        {entry.fields.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
