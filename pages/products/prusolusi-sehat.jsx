import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const benefitsData = [
  {
    image: "/static/images/benefits/fleksibel.png",
    description: "Fleksibel dalam memilih tipe dan batas harga kamar rawat inap dan area perlindungan sesuai kebutuhan"
  },
  {
    image: "/static/images/benefits/65-miliar-1.png",
    description: "Batas Manfaat tahunan sesuai Plan yang dipilih beserta dengan PRUSolusi Sehat Limit Booster"
  },
  {
    image: "/static/images/benefits/pre-post.png",
    description: "Perawatan rawat jalan 30 hari sebelum dan 90 hari sesudah tindakan bedah Rawat Jalan"
  },
  {
    image: "/static/images/benefits/PRUSolusi-Sehat-Highlight-4.png",
    description: "Jika terjadi risiko perawatan di luar wilayah pertanggungan akan dibayarkan sesuai persentase (%)"
  },
]

const title = "PRUSolusi Sehat"

const ProductItem = () => {
  return(
    <>
      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            PRUSolusi Sehat  adalah Produk Asuransi Kesehatan Tradisional yang memberikan solusi lengkap dan fleksibel untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit untuk beberapa manfaat berdasarkan plan yang dipilih pada Tabel Manfaat PRUSolusi Sehat serta jangkauan perlindungan hingga seluruh dunia yang memberikan fleksibilitas atas pilihan Perlindungan kesehatan Anda*.
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h4 className="font-weight-normal fs-18-s mb-3">Keuntungan {title}</h4>
          <Row className="justify-content-between">
            {benefitsData.map((data, i) => (
              <Col key={i} lg={3} md={6} className="col-6 mb-4">
                <Card className="border-0">
                  <Image src={data.image} className="bg-light mb-2" thumbnail />
                  <Card.Text className="text-center">
                    {data.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem