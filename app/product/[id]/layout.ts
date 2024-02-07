export async function generateMetadata({ params }: { params: any }) {
  const postList = [
    {
      id: "1",
      image: "/images/gallery/1.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
    {
      id: "2",
      image: "/images/gallery/2.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
    {
      id: "3",
      image: "/images/gallery/3.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
    {
      id: "4",
      image: "/images/gallery/4.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
    {
      id: "5",
      image: "/images/gallery/5.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
    {
      id: "6",
      image: "/images/gallery/6.jpg",
      avatar: "/images/user.jpg",
      user: "Evelyn T.",
      prof: "Director",
      views: 522,
      price: 99,
      link: "https://www.google.com/",
      title: "In collaboration with Valeriia Mille",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been.",
    },
  ];

  const data = postList.filter((item) => item.id === params.id)[0];
  const metadata = {
    title: data?.title,
    description: "This is description",
    openGraph: {
      title: data?.title,
      description: "This is description",
      images: [
        {
          url: `https://react-sociall.vercel.app${data?.image}`,
          width: 800,
          height: 600,
          alt: data?.title,
        },
        {
          url: `https://react-sociall.vercel.app${data?.image}`,
          width: 800,
          height: 600,
          alt: data?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title.toString(),
      description: "This is description".toString(),
      image: `https://react-sociall.vercel.app${data?.image}`,
    },
  };

  return metadata;
}

export default generateMetadata;
