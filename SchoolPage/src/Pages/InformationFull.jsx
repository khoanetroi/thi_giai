import SmallCard from "../Components/smallCard";
import hinh1 from "../assets/HoatDongIMG/hinh1.jpg";
import hinh2 from "../assets/HoatDongIMG/hinh2.jpg";
import hinh3 from "../assets/HoatDongIMG/hinh3.jpg";
import hinh4 from "../assets/HoatDongIMG/hinh4.jpg";
import hinh5 from "../assets/HoatDongIMG/hinh5.jpg";    
import hinh6 from "../assets/HoatDongIMG/hinh6.jpg";

const relatedPosts = [
    {
        id: 1,
        title: "Học viện Công nghệ Bưu chính Viễn thông tiếp đoàn Boise State",
        date: "07/10/2025",
        imageSrc: hinh1
    },
    {
        id: 2,
        title: "Học viện Công nghệ Bưu chính khai giảng khóa học mới",
        date: "04/10/2025",
        imageSrc: hinh2
    },
    {
        id: 3,
        title: "PTIT tham dự hội thảo tham vấn doanh nghiệp",
        date: "03/10/2025",
        imageSrc: hinh3
    },
    {
        id: 4,
        title: "TS. Vũ Hoài Nam - Giảng viên trẻ PTIT nhận giải thưởng",
        date: "02/10/2025",
        imageSrc: hinh4
    },
    {
        id: 5,
        title: "PTIT triển khai chương trình thực tập doanh nghiệp",
        date: "01/10/2025",
        imageSrc: hinh5
    },
    {
        id: 6,
        title: "Bộ Khoa học và Công nghệ đánh giá cao PTIT",
        date: "30/09/2025",
        imageSrc: hinh6
    }
];

function InformationFull() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row gap-8">
                <article className="lg:w-2/3 text-left space-y-6 bg-white rounded-lg shadow p-6">
                    <header className="space-y-3">
                        <p className="text-lg text-red-500 font-semibold">Tin tức</p>
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Học viện Công nghệ Bưu chính Viễn thông tiếp đón đoàn giáo sư Boise State, Hoa Kỳ
                        </h1>
                        <div className="text-sm md:text-sm text-gray-500 flex flex-wrap gap-4">
                            <span>09/10/2025</span>
                            <span>admin@ptit</span>
                        </div>
                    </header>

                    <p>
                        Ngày 08/10/2025, Học viện Công nghệ Bưu chính Viễn thông (PTIT) tổ chức buổi tiếp đón và làm
                        việc với đoàn đại biểu Boise State nhằm trao đổi cơ hội hợp tác đào tạo, nghiên cứu khoa học và
                        khởi nghiệp đổi mới sáng tạo.
                    </p>
                    <p>
                        Buổi làm việc mở ra nhiều định hướng kết nối giữa hai bên trong các chương trình trao đổi sinh viên
                        và giảng viên, đồng thởi thúc đẩy các dự án nghiên cứu chung trong lĩnh vực công nghệ thông tin.
                    </p>
                    <p>
                        Đại diện PTIT khẳng định luôn sẵn sàng chia sẻ nguồn lực, hỗ trợ chuyên môn và tạo điều kiện tốt nhất
                        để sinh viên hai trường có môi trường học tập hiện đại, thực tiễn.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores doloribus earum porro,
                        neque cupiditate ullam obcaecati aliquid quae dicta ipsum blanditiis. Sunt nemo et repellat suscipit
                        excepturi perspiciatis unde sed expedita odio cumque iusto reiciendis distinctio labore officiis at,
                        ut fugiat hic temporibus possimus, non debitis?
                    </p>

                    <div className="my-6 flex flex-col items-center gap-2">
                        <img
                            src={hinh6}
                            alt="Đoàn công tác PTIT"
                            className="w-full max-w-2xl rounded-lg shadow"
                        />
                        <span className="text-xs text-gray-500">Hình ảnh buổi làm việc giữa PTIT và các đối tác quốc tế</span>
                    </div>

                    <p>
                        Neque omnis natus doloribus consequuntur reprehenderit dolores facilis, molestiae sunt odio iure quae,
                        esse obcaecati. Recusandae ipsa, explicabo eligendi debitis laborum odio fugit tempore possimus ducimus
                       lore architecto commodi nostrum inventore impedit ex obcaficiis omnis, consectetur eveniet consequuntur temporibus optio nobis sit. Molestias repellat ex accusantium magni voluptatem ab quas nulla cum dignissimos neque veniam velit deleniti perspiciatis odio officiis vero unde eius voluptas, voluptatibus, nemo tenetur voluptate non? Distinctio amet tenetur dolorem ea pariatur animi inventore dolore! Provident optio, dolor modi suscipit eaque at. Aliquid alias laboriosam repellendus ipsa laudantium ex facere, odit ab odio voluptatum optio quidem dicta. Tenetur, quas sit nostrum rerum nam sed vero quos esse. Nulla nesciunt aperiam neque dolorum, expedita recusandae accusamus nobis vero temporibus aliquid nam veniam sunt! Cupiditate alias perferendis exercitationem iure optio dolorum repellendus, eos impedit dicta dolorem, quam, aut veniam obcaecati reiciendis? Itaque architecto, reiciendis sed, fuga repudiandae exercitationem suscipit, quisquam culpa vel dolorum laudantium? Itaque, adipisci accusantium eum dolorum fugit sapiente aliquam sed iste, molestias aut asperiores quod odio consectetur velit eius ratione incidunt est mollitia. Ipsum ut eum iure at mollitia similique! Mollitia architecto necessitatibus unde at soluta aut commodi itaque. Numquam quis deleniti exercitationem cupiditate! Reiciendis eos vero quod, libero quidem odio at quo hic necessitatibus suscipit expedita reprehenderit quisquam provident. Enim, sapiente obcaecati. Odit consectetur vel illo numquam error ipsa ipsam quis et perspiciatis, qui repudiandae. Iusto corporis in voluptatibus quo iste id qui natus debitis, aspernatur odio maiores similique, dicta molestiae, quam architecto accusamus velit. Quos, exercitationem laboriosam excepturi quod laudantium aperiam odit incidunt ipsam explicabo delectus voluptatem qui modi animi neque, ratione sequi dolorum esse sint praesentium possimus perferendis, in reiciendis maiores. Minus ipsam quidem dolorem obcaecati sunt delectus culpa architecto iusto officia distinctio itaque iste aliquid asperiores eaque, sapiente repudiandae quod eos aliquam libero. Porro, rerum alias! Ipsa perspiciatis laborum excepturi illo architecto maxime dolores dolor voluptatibus, ab facilis. Nulla accusantium, vitae reprehenderit corrupti sunt tempore dignissimos iste provident saepe possimus deleniti quos enim eius perferendis repudiandae modi omnis illum quasi aspernatur laboriosam! Placeat similique, ipsam id eius rem minima atque facilis odit facere, recusandae modi ipsum. Nihil officiis ex tenetur quaerat dignissimos consequatur iure perferendis, fugiat vitae voluptas similique cumque ipsum quibusdam assumenda veniam ratione explicabo sit ipsam reprehenderit neque excepturi enim, eligendi dolorum animi. Explicabo, aspernatur. Nobis quibusdam recusandae assumenda delectus tempora! Laudantium veniam dolore voluptatem expedita illum eius ab? Facilis amet atque iure corrupti. Quisquam, quaerat nobis dolorem voluptatem eius pariatur consectetur quo nihil possimus tempora nulla veritatis voluptas aliquid, quis repellendus doloribus. Officiis enim placeat voluptas iusto dicta rerum, quibusdam ad repudiandae in obcaecati veritatis quisquam amet esse voluptates tempore, sit blanditiis accusantium hic iste magnam? Modi, a eos sequi dicta sit, ipsa illum facilis reiciendis, corrupti quia id libero in repudiandae incidunt nulla eaque nobis. Illum dignissimos error sint, explicabo aut ipsa ullam cupiditate necessitatibus, cum assumenda laborum officia a ad autem corporis dolor, eaque voluptate inventore tempore? Deleniti voluptate amet libero perferendis, cupiditate vero quaerat. Dolore totam exercitationem eligendi animi rerum, alias nemo ipsum dolor, eveniet, soluta amet. Libero, dignissimos magni. Temporibus, nostrum iusto ipsam vero doloremque dignissimos natus voluptate asperiores delectus similique neque debitis consequatur reprehenderit, aliquam sint rem consequuntur voluptatem, dolorem fugiat. Ullam, nobis cumque beatae magnam dicta nisi quae, sunt tempore voluptatum saepe vel corrupti aliquam quod fugiat. Quo corporis nisi aperiam eius fuga magnam. Inventore expedita esse architecto voluptas quam blanditiis praesentium totam eaque veritatis? Tempora?
                    </p>
                </article>

                <aside className="lg:w-1/3 space-y-4">
                    <h2 className="text-lg font-semibold">Bài viết liên quan</h2>
                    <div className="space-y-3">
                        {relatedPosts.map((post) => (
                            <SmallCard
                                key={post.id}
                                title={post.title}
                                date={post.date}
                                imageSrc={post.imageSrc}
                            />
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default InformationFull;
